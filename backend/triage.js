const categories = [
  {
    id: 'rede',
    label: 'Rede e Internet',
    keywords: ['internet', 'wifi', 'rede', 'conexao', 'conexão', 'cabo', 'sem sinal', 'caiu a rede'],
    suggestion: 'Verifique se o cabo de rede está bem conectado ou se o Wi-Fi está ativado. Tente reiniciar o roteador e o computador. Se o problema continuar, vamos abrir um chamado.'
  },
  {
    id: 'impressora',
    label: 'Impressora',
    keywords: ['impressora', 'imprimir', 'impressao', 'impressão', 'toner', 'papel travado'],
    suggestion: 'Verifique se a impressora está ligada e conectada. Tente reiniciá-la e reenviar a impressão. Se não resolver, vamos abrir um chamado.'
  },
  {
    id: 'acesso',
    label: 'Senha e Acesso',
    keywords: ['senha', 'login', 'acesso', 'bloqueado', 'bloqueada', 'nao consigo entrar', 'não consigo entrar'],
    suggestion: 'Tente redefinir sua senha pela opção "Esqueci minha senha". Verifique também se o Caps Lock está ativado. Se o problema continuar, vamos abrir um chamado.'
  },
  {
    id: 'hardware',
    label: 'Hardware',
    keywords: ['computador nao liga', 'computador não liga', 'tela azul', 'travando', 'travou', 'lento', 'barulho estranho'],
    suggestion: 'Reinicie o equipamento e verifique se todos os cabos estão bem conectados. Se o problema continuar, vamos abrir um chamado.'
  },
  {
    id: 'software',
    label: 'Sistema e Software',
    keywords: ['sistema', 'programa', 'aplicativo', 'erro', 'nao abre', 'não abre', 'travando o sistema', 'atualizacao', 'atualização'],
    suggestion: 'Tente fechar e abrir o programa novamente, ou reiniciar o computador. Se o erro persistir, vamos abrir um chamado.'
  },
  {
    id: 'email',
    label: 'E-mail',
    keywords: ['email', 'e-mail', 'outlook', 'nao recebo email', 'não recebo email', 'enviar email'],
    suggestion: 'Verifique sua conexão com a internet e se o e-mail está configurado corretamente. Se o problema continuar, vamos abrir um chamado.'
  }
];

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function classify(message) {
  const normalized = normalize(message);

  for (const category of categories) {
    const match = category.keywords.some((keyword) =>
      normalized.includes(normalize(keyword))
    );
    if (match) {
      return category;
    }
  }

  return {
    id: 'outro',
    label: 'Outro',
    suggestion: 'Não identifiquei automaticamente o seu problema. Pode descrever com mais detalhes ou, se preferir, já posso abrir um chamado para o suporte.'
  };
}

module.exports = { categories, classify };
