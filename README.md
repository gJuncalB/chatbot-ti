# Chatbot de Suporte de TI

Projeto acadêmico de Análise e Desenvolvimento de Sistemas (ADS). É um site com um chatbot de suporte de TI: o usuário descreve o problema, o sistema tenta resolver sozinho e, se não conseguir, abre um chamado classificado por categoria, com protocolo e posição na fila.

## Integrantes

Gabriel Juncal Beneducci RA 432965616563
Carlos Alberto da Silva RA 426204316563
Gabriel Pedrosa Mapeli RA 428103016563

## Como funciona

1. O usuário descreve o problema no chat.
2. O sistema procura uma solução na base local de problemas comuns (rápido e sem custo).
3. Se o problema não estiver na base, o front chama o backend, que consulta uma IA (Google Gemini) e devolve passos de solução.
4. Se o problema continuar, o usuário pede ajuda humana. O sistema classifica a categoria, abre o chamado e informa o protocolo e a posição na fila.
5. Antes do acesso remoto, o usuário vê um termo de consentimento. O aceite é registrado com data e hora.

## Tecnologias

- Front-end: HTML, CSS e JavaScript puro
- Back-end: Node.js e Express
- Banco de dados: SQLite (better-sqlite3), arquivo local criado automaticamente
- IA: API do Google Gemini

## Estrutura do projeto

```
backend/
  server.js        servidor Express e registro das rotas
  db.js            criação do banco SQLite e da tabela de chamados
  triage.js        triagem por palavras-chave e categorias
  routes/
    chat.js        triagem de uma mensagem
    tickets.js     chamados, fila, consentimento e status
    ai.js          consulta à IA (Gemini)
frontend/
  index.html       tela principal
  login.html       tela de login
  chamados.html    tela de acompanhamento de chamados
  ajuda.html       tela de ajuda
  css/ e js/       estilos e scripts
```

## Como rodar

Requisitos: Node.js 20 ou mais novo e uma chave gratuita da API do Gemini (aistudio.google.com).

1. Entre na pasta do backend e instale as dependências:

```
cd backend
npm install
```

2. Crie o arquivo `.env` a partir do exemplo e coloque a sua chave:

```
copy .env.example .env
```

O arquivo `.env` deve ficar assim:

```
GEMINI_API_KEY=sua_chave_aqui
GEMINI_MODEL=gemini-3.8-flash
PORT=3000
```

Se o Google informar que o modelo não está disponível, troque o valor de `GEMINI_MODEL` por um modelo liberado na sua conta.

3. Inicie o servidor e deixe o terminal aberto:

```
npm start
```

O terminal deve mostrar `Servidor rodando em http://localhost:3000`.

4. Abra o arquivo `frontend/index.html` no navegador.

Sem o backend rodando, o front responde apenas aos problemas da base local. A IA e os chamados dependem do servidor ligado.

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/health` | Verifica se o servidor está no ar |
| POST | `/api/chat` | Classifica uma mensagem por palavras-chave |
| POST | `/api/ai` | Gera sugestões de solução com a IA |
| POST | `/api/tickets` | Cria um chamado |
| GET | `/api/tickets` | Lista chamados (filtros opcionais `category` e `status`) |
| GET | `/api/tickets/:id` | Consulta um chamado e a posição na fila |
| POST | `/api/tickets/:id/consent` | Registra o aceite do termo de acesso remoto |
| PATCH | `/api/tickets/:id/status` | Atualiza o status (`fila`, `em_atendimento`, `resolvido`) |

Exemplo de criação de chamado (`POST /api/tickets`):

```
{ "category": "rede", "description": "internet caiu", "userName": "Maria" }
```

Categorias disponíveis: `rede`, `impressora`, `acesso`, `hardware`, `software`, `email` e `outro`.

A posição na fila é calculada por categoria e se atualiza quando chamados anteriores são resolvidos.

## Estado atual e limitações

- A IA está integrada ao front e ao backend.
- Os chamados, a fila, o consentimento e o banco funcionam no backend e podem ser testados pela API (por exemplo, com o Postman). As telas de abrir chamado e de acompanhamento do front ainda usam dados simulados no próprio JavaScript e não estão ligadas à API de chamados.
- Não há integração com uma plataforma de chamados de mercado: o chamado é gravado no banco SQLite do próprio projeto.
- O acesso remoto não é automático. O fluxo guia o usuário com o termo de consentimento e o link de download do software de acesso remoto.
- O plano gratuito do Gemini tem limite de requisições por minuto e por dia.

## Segurança

- O arquivo `.env` guarda a chave da API e nunca deve ser enviado ao GitHub. Ele já está no `.gitignore`.
- Se a chave for exposta, apague-a no Google AI Studio e gere outra.
