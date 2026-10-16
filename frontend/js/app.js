const problemInput = document.getElementById("problemInput");
const solveButton = document.getElementById("solveButton");
const solutionArea = document.getElementById("solutionArea");
const problemCards = document.querySelectorAll(".problem-card");

// =====================================================
// BASE DE PROBLEMAS E SOLUÇÕES
// =====================================================

const problemas = [
    // =================================================
    // COMPUTADOR
    // =================================================

    {
        id: 1,
        categoria: "computador",
        problema: "Computador não liga",
        palavrasChave: [
            "não liga",
            "nao liga",
            "computador não liga",
            "pc não liga",
            "pc nao liga"
        ],
        solucoes: [
            "Verifique se o cabo de energia do computador está conectado corretamente.",
            "Confira se o filtro de linha ou estabilizador está ligado.",
            "Verifique se o monitor também está conectado e ligado.",
            "Se o computador continuar sem apresentar nenhum sinal de energia, solicite atendimento ao suporte de TI."
        ]
    },

    {
        id: 2,
        categoria: "computador",
        problema: "Computador desligando sozinho",
        palavrasChave: [
            "desligando sozinho",
            "desliga sozinho",
            "computador desliga",
            "pc desligando"
        ],
        solucoes: [
            "Verifique se o cabo de energia está conectado corretamente.",
            "Confira se as saídas de ar do computador não estão bloqueadas.",
            "Evite utilizar o computador em locais com pouca ventilação.",
            "Se o desligamento continuar acontecendo, abra um chamado para que o suporte possa verificar o equipamento."
        ]
    },

    {
        id: 3,
        categoria: "computador",
        problema: "Computador muito lento",
        palavrasChave: [
            "computador lento",
            "pc lento",
            "muito lento",
            "lento"
        ],
        solucoes: [
            "Feche programas e janelas que não estão sendo utilizados.",
            "Verifique se existem muitos aplicativos abertos simultaneamente.",
            "Reinicie o computador para liberar recursos temporários.",
            "Se o problema persistir, solicite uma análise do suporte de TI."
        ]
    }, 

    {
        id: 4,
        categoria: "computador",
        problema: "Computador travando",
        palavrasChave: [
            "computador travando",
            "pc travando",
            "travando",
            "computador trava"
        ],
        solucoes: [
            "Aguarde alguns segundos para verificar se o sistema volta a responder.",
            "Feche os programas que não estão sendo utilizados.",
            "Reinicie o computador caso ele continue travado.",
            "Se os travamentos forem frequentes, abra um chamado para investigação do problema."
        ]
    },

    {
        id: 5,
        categoria: "computador",
        problema: "Tela azul",
        palavrasChave: [
            "tela azul",
            "blue screen",
            "tela azul do windows"
        ],
        solucoes: [
            "Anote qualquer código ou mensagem apresentada na tela azul.",
            "Aguarde o computador reiniciar automaticamente.",
            "Evite desligar o equipamento durante uma atualização ou reparo automático.",
            "Se a tela azul voltar a aparecer, abra um chamado informando o código apresentado."
        ]
    },

    {
        id: 6,
        categoria: "computador",
        problema: "Windows não inicia",
        palavrasChave: [
            "windows não inicia",
            "windows nao inicia",
            "windows não entra",
            "windows nao entra"
        ],
        solucoes: [
            "Verifique se o computador está ligado corretamente.",
            "Aguarde alguns minutos caso o Windows esteja realizando uma atualização.",
            "Se aparecer uma tela de recuperação automática, não altere configurações avançadas sem orientação do suporte.",
            "Caso o sistema continue sem iniciar, solicite atendimento do TI."
        ]
    },

    {
        id: 7,
        categoria: "computador",
        problema: "Aplicativo não abre",
        palavrasChave: [
            "aplicativo não abre",
            "aplicativo nao abre",
            "programa não abre",
            "programa nao abre",
            "app não abre"
        ],
        solucoes: [
            "Feche o aplicativo completamente e tente abri-lo novamente.",
            "Reinicie o computador e tente acessar o aplicativo novamente.",
            "Verifique se outros aplicativos estão funcionando normalmente.",
            "Se somente esse aplicativo apresentar problema, abra um chamado informando o nome do programa."
        ]
    },

    {
        id: 8,
        categoria: "computador",
        problema: "Computador superaquecendo",
        palavrasChave: [
            "computador quente",
            "pc quente",
            "superaquecendo",
            "superaquecimento",
            "muito quente"
        ],
        solucoes: [
            "Verifique se as saídas de ar do computador estão livres.",
            "Não bloqueie as entradas e saídas de ventilação.",
            "Se possível, desligue o equipamento e aguarde alguns minutos para que ele esfrie.",
            "Se o problema continuar, solicite uma avaliação do suporte de TI."
        ]
    },

    // =================================================
    // INTERNET
    // =================================================

    {
        id: 9,
        categoria: "internet",
        problema: "Internet não funciona",
        palavrasChave: [
            "internet não funciona",
            "internet nao funciona",
            "sem internet",
            "internet caiu"
        ],
        solucoes: [
            "Verifique se o cabo de rede está conectado corretamente.",
            "Se estiver utilizando Wi-Fi, confira se o computador está conectado à rede da empresa.",
            "Verifique se outros sites ou sistemas também estão sem acesso.",
            "Se outros computadores estiverem enfrentando o mesmo problema, abra um chamado para o suporte."
        ]
    },

    {
        id: 10,
        categoria: "internet",
        problema: "Internet lenta",
        palavrasChave: [
            "internet lenta",
            "internet muito lenta",
            "conexão lenta",
            "conexao lenta"
        ],
        solucoes: [
            "Feche downloads e aplicativos que possam estar utilizando muita rede.",
            "Verifique se o problema acontece em outros sites e sistemas.",
            "Se estiver utilizando Wi-Fi, tente se aproximar do ponto de acesso.",
            "Se a lentidão continuar, abra um chamado informando quais sistemas estão sendo afetados."
        ]
    },

    {
        id: 11,
        categoria: "internet",
        problema: "Wi-Fi não conecta",
        palavrasChave: [
            "wifi não conecta",
            "wifi nao conecta",
            "wi-fi não conecta",
            "wifi não funciona"
        ],
        solucoes: [
            "Verifique se o Wi-Fi está ativado no computador.",
            "Confira se a rede da empresa está selecionada.",
            "Tente desconectar e conectar novamente à rede.",
            "Se a rede continuar indisponível, solicite suporte ao TI."
        ]
    },

    {
        id: 12,
        categoria: "internet",
        problema: "Cabo de rede não reconhecido",
        palavrasChave: [
            "cabo de rede",
            "cabo não funciona",
            "cabo nao funciona",
            "ethernet",
            "rede cabeada"
        ],
        solucoes: [
            "Verifique se o cabo está conectado corretamente ao computador.",
            "Confira se a outra extremidade está conectada ao ponto de rede.",
            "Se possível, teste outro cabo de rede disponível.",
            "Se o problema continuar, abra um chamado para o suporte."
        ]
    },

    {
        id: 13,
        categoria: "internet",
        problema: "Conexão cai constantemente",
        palavrasChave: [
            "internet cai",
            "conexão cai",
            "conexao cai",
            "internet desconecta",
            "wifi cai"
        ],
        solucoes: [
            "Verifique se o problema acontece somente no seu computador.",
            "Se estiver utilizando Wi-Fi, verifique a qualidade do sinal.",
            "Evite movimentar ou desconectar cabos de rede durante o uso.",
            "Se as quedas continuarem, abra um chamado informando os horários em que acontecem."
        ]
    },

    {
        id: 14,
        categoria: "internet",
        problema: "Sem acesso à rede da empresa",
        palavrasChave: [
            "rede da empresa",
            "rede corporativa",
            "sem acesso à rede",
            "não acesso a rede"
        ],
        solucoes: [
            "Verifique se o cabo de rede ou Wi-Fi está conectado.",
            "Confirme se você está utilizando a rede corporativa correta.",
            "Tente desconectar e conectar novamente à rede.",
            "Se o acesso continuar indisponível, abra um chamado para o suporte de TI."
        ]
    },

    // =================================================
    // IMPRESSORAS
    // =================================================

    {
        id: 15,
        categoria: "impressora",
        problema: "Impressora não imprime",
        palavrasChave: [
            "impressora não imprime",
            "impressora nao imprime",
            "não consigo imprimir",
            "nao consigo imprimir"
        ],
        solucoes: [
            "Verifique se a impressora está ligada.",
            "Confira se existe papel e se não há indicação de erro no equipamento.",
            "Verifique se a impressora correta está selecionada no computador.",
            "Se o problema continuar, abra um chamado informando o nome ou localização da impressora."
        ]
    },

    {
        id: 16,
        categoria: "impressora",
        problema: "Impressora offline",
        palavrasChave: [
            "impressora offline",
            "impressora está offline",
            "impressora esta offline"
        ],
        solucoes: [
            "Verifique se a impressora está ligada.",
            "Confira a conexão de rede da impressora.",
            "Verifique se o computador está conectado à rede corporativa.",
            "Se continuar offline, solicite atendimento ao suporte."
        ]
    },

    {
        id: 17,
        categoria: "impressora",
        problema: "Impressão com erro",
        palavrasChave: [
            "impressão com erro",
            "impressao com erro",
            "impressão falhou",
            "impressao falhou"
        ],
        solucoes: [
            "Verifique se existe papel e tinta ou toner disponíveis.",
            "Confira se existe alguma mensagem de erro no equipamento.",
            "Cancele a impressão atual e tente enviar o documento novamente.",
            "Se o erro continuar, abra um chamado."
        ]
    },

    {
        id: 18,
        categoria: "impressora",
        problema: "Impressora não aparece no computador",
        palavrasChave: [
            "impressora não aparece",
            "impressora nao aparece",
            "não encontro impressora",
            "nao encontro impressora"
        ],
        solucoes: [
            "Verifique se o computador está conectado à rede da empresa.",
            "Confirme se a impressora está ligada.",
            "Verifique se a impressora correta está instalada no computador.",
            "Caso ela continue indisponível, solicite suporte ao TI."
        ]
    },

    // =================================================
    // ÁUDIO E PERIFÉRICOS
    // =================================================

    {
        id: 19,
        categoria: "audio",
        problema: "Computador sem áudio",
        palavrasChave: [
            "sem áudio",
            "sem audio",
            "computador sem som",
            "pc sem som"
        ],
        solucoes: [
            "Verifique se o volume do computador não está silenciado.",
            "Confira se o dispositivo de saída de áudio correto está selecionado.",
            "Verifique se o fone ou alto-falante está conectado corretamente.",
            "Se o áudio continuar sem funcionar, abra um chamado para o suporte."
        ]
    },

    {
        id: 20,
        categoria: "audio",
        problema: "Microfone não funciona",
        palavrasChave: [
            "microfone não funciona",
            "microfone nao funciona",
            "microfone sem som",
            "microfone não pega"
        ],
        solucoes: [
            "Verifique se o microfone está conectado corretamente.",
            "Confira se o microfone não está silenciado.",
            "Verifique nas configurações do Windows se o microfone correto está selecionado.",
            "Se continuar sem funcionar, solicite atendimento ao suporte."
        ]
    },

    {
        id: 21,
        categoria: "audio",
        problema: "Fone de ouvido não funciona",
        palavrasChave: [
            "fone não funciona",
            "fone nao funciona",
            "fone sem som",
            "headset não funciona",
            "headset nao funciona"
        ],
        solucoes: [
            "Verifique se o fone está conectado corretamente.",
            "Confira se o volume do computador está ativado.",
            "Verifique se o fone correto está selecionado como dispositivo de saída.",
            "Se outro fone também não funcionar, abra um chamado para o suporte."
        ]
    },

    {
        id: 22,
        categoria: "perifericos",
        problema: "Mouse ou teclado não funciona",
        palavrasChave: [
            "mouse não funciona",
            "mouse nao funciona",
            "teclado não funciona",
            "teclado nao funciona",
            "mouse parou",
            "teclado parou"
        ],
        solucoes: [
            "Verifique se o dispositivo está conectado corretamente.",
            "Se for um dispositivo USB, tente outra porta disponível.",
            "Se for sem fio, verifique a conexão e as pilhas.",
            "Se o problema continuar, solicite um equipamento substituto ao suporte de TI."
        ]
    },

    // =================================================
    // CONTAS E SISTEMAS
    // =================================================

    {
        id: 23,
        categoria: "acesso",
        problema: "Não consigo entrar na conta",
        palavrasChave: [
            "não consigo entrar",
            "nao consigo entrar",
            "login não funciona",
            "login nao funciona",
            "conta não entra"
        ],
        solucoes: [
            "Confira se seu ID e senha foram digitados corretamente.",
            "Verifique se o Caps Lock não está ativado.",
            "Tente fechar o sistema e realizar o login novamente.",
            "Se a conta continuar indisponível, abra um chamado para o suporte."
        ]
    },

    {
        id: 24,
        categoria: "acesso",
        problema: "Esqueci minha senha",
        palavrasChave: [
            "esqueci minha senha",
            "senha esquecida",
            "não lembro minha senha",
            "nao lembro minha senha"
        ],
        solucoes: [
            "Utilize o procedimento oficial de recuperação de senha da empresa, caso esteja disponível.",
            "Não compartilhe sua senha com outros funcionários ou com o suporte.",
            "Se não conseguir recuperar o acesso, abra um chamado para a equipe responsável.",
            "O suporte poderá realizar a validação necessária para recuperar sua conta."
        ]
    },

    {
        id: 25,
        categoria: "sistemas",
        problema: "Sistema corporativo não abre",
        palavrasChave: [
            "sistema não abre",
            "sistema nao abre",
            "sistema corporativo",
            "sistema não funciona",
            "sistema nao funciona"
        ],
        solucoes: [
            "Feche o sistema completamente e tente acessá-lo novamente.",
            "Verifique se sua conexão com a rede da empresa está funcionando.",
            "Reinicie o computador e tente abrir o sistema novamente.",
            "Se outros funcionários também estiverem com o mesmo problema, informe o suporte de TI."
        ]
    }
];

// =====================================================
// IDENTIFICAR O PROBLEMA
// =====================================================

function identifyProblem(text) {
    const problem = text.toLowerCase();

    for (const item of problemas) {
        for (const palavra of item.palavrasChave) {
            if (problem.includes(palavra.toLowerCase())) {
                return {
                    title: item.problema,
                    icon: getProblemIcon(item.categoria),
                    description:
                        "Encontramos algumas possíveis soluções para esse problema.",
                    steps: item.solucoes
                };
            }
        }
    }

    return null;
}

// =====================================================
// ÍCONE DOS PROBLEMAS
// =====================================================

function getProblemIcon(categoria) {
    const icons = {
        computador: "💻",
        internet: "🌐",
        impressora: "🖨️",
        audio: "🔊",
        perifericos: "⌨️",
        acesso: "🔐",
        sistemas: "🖥️"
    };

    return icons[categoria] || "🛠️";
}

// =====================================================
// MOSTRAR SOLUÇÃO
// =====================================================

function showSolution(solution) {
    solutionArea.innerHTML = `
        <div class="solution-card">

            <div class="solution-header">

                <div class="solution-main-icon">
                    ${solution.icon}
                </div>

                <div>
                    <span class="solution-label">
                        ASSISTENTE DE TI
                    </span>

                    <h3>
                        ${solution.title}
                    </h3>
                </div>

            </div>

            <p class="solution-description">
                ${solution.description}
            </p>

            <div class="solution-steps">

                <h4>
                    🔧 Possíveis soluções
                </h4>

                <ol>
                    ${solution.steps
                        .map(step => `<li>${step}</li>`)
                        .join("")}
                </ol>

            </div>

            <div class="solution-feedback">

                <h4>
                    Seu problema foi resolvido?
                </h4>

                <p>
                    Informe se as soluções acima ajudaram.
                </p>

                <div class="feedback-buttons">

                    <button
                        class="solved-button"
                        id="solvedButton"
                    >
                        ✓ Sim, meu problema foi resolvido
                    </button>

                    <button
                        class="not-solved-button"
                        id="notSolvedButton"
                    >
                        ✕ Não, ainda preciso de ajuda
                    </button>

                </div>

            </div>

        </div>
    `;

    document
        .getElementById("solvedButton")
        .addEventListener("click", problemSolved);

    document
        .getElementById("notSolvedButton")
        .addEventListener("click", openSupportRequest);

    solutionArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// =====================================================
// CONSULTAR IA (BACKEND)
// =====================================================

const API_BASE_URL = "http://localhost:3000";

async function consultarIA(problem) {
    showAILoading();

    try {
        const response = await fetch(`${API_BASE_URL}/api/ai`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: problem })
        });

        if (!response.ok) {
            throw new Error("Falha na resposta da IA");
        }

        const data = await response.json();

        showAISolution(data.reply, data.category);
    } catch (error) {
        showUnknownProblem();
    }
}

// =====================================================
// CARREGANDO RESPOSTA DA IA
// =====================================================

function showAILoading() {
    solutionArea.innerHTML = `
        <div class="solution-card">

            <div class="solution-header">

                <div class="solution-main-icon">
                    🤖
                </div>

                <div>
                    <span class="solution-label">
                        IA - NEXSUPPORT
                    </span>

                    <h3>
                        Analisando seu problema...
                    </h3>
                </div>

            </div>

            <p class="solution-description">
                Estamos consultando nosso assistente de IA
                para encontrar a melhor solução.
            </p>

        </div>
    `;

    solutionArea.scrollIntoView({
        behavior: "smooth"
    });
}

// =====================================================
// RESPOSTA DA IA
// =====================================================

function showAISolution(reply, category) {
    const steps = reply
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

    solutionArea.innerHTML = `
        <div class="solution-card">

            <div class="solution-header">

                <div class="solution-main-icon">
                    🤖
                </div>

                <div>
                    <span class="solution-label">
                        IA - NEXSUPPORT
                    </span>

                    <h3>
                        Sugestão gerada pela nossa IA
                    </h3>
                </div>

            </div>

            <p class="solution-description">
                Não tínhamos essa dúvida cadastrada,
                então consultamos nosso assistente de IA
                para te ajudar.
            </p>

            <div class="solution-steps">

                <h4>
                    🔧 Possíveis soluções
                </h4>

                <ol>
                    ${steps.map(step => `<li>${step}</li>`).join("")}
                </ol>

            </div>

            <div class="solution-feedback">

                <h4>
                    Seu problema foi resolvido?
                </h4>

                <p>
                    Informe se as soluções acima ajudaram.
                </p>

                <div class="feedback-buttons">

                    <button
                        class="solved-button"
                        id="solvedButton"
                    >
                        ✓ Sim, meu problema foi resolvido
                    </button>

                    <button
                        class="not-solved-button"
                        id="notSolvedButton"
                    >
                        ✕ Não, ainda preciso de ajuda
                    </button>

                </div>

            </div>

        </div>
    `;

    document
        .getElementById("solvedButton")
        .addEventListener("click", problemSolved);

    document
        .getElementById("notSolvedButton")
        .addEventListener("click", openSupportRequest);

    solutionArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// =====================================================
// PROBLEMA NÃO ENCONTRADO
// =====================================================

function showUnknownProblem() {
    solutionArea.innerHTML = `
        <div class="solution-card">

            <div class="solution-header">

                <div class="solution-main-icon">
                    🤔
                </div>

                <div>
                    <span class="solution-label">
                        ASSISTENTE DE TI
                    </span>

                    <h3>
                        Não foi possível gerar uma solução agora
                    </h3>
                </div>

            </div>

            <p class="solution-description">
                Não encontramos uma resposta pronta e não
                conseguimos consultar a IA no momento.
                Tente novamente ou abra um chamado para
                falar direto com o suporte.
            </p>

            <div class="solution-feedback">

                <button
                    class="not-solved-button"
                    id="openTicketButton"
                >
                    🎫 Abrir chamado com o suporte
                </button>

            </div>

        </div>
    `;

    document
        .getElementById("openTicketButton")
        .addEventListener("click", openSupportRequest);

    solutionArea.scrollIntoView({
        behavior: "smooth"
    });
}

// =====================================================
// PROBLEMA RESOLVIDO
// =====================================================

function problemSolved() {
    solutionArea.innerHTML = `
        <div class="success-card">

            <div class="success-icon">
                ✓
            </div>

            <h3>
                Problema resolvido!
            </h3>

            <p>
                Ótimo! Ficamos felizes em ajudar.
                Você não precisa abrir um chamado.
            </p>

            <button
                class="new-search-button"
                id="newSearchButton"
            >
                🔍 Resolver outro problema
            </button>

        </div>
    `;

    document
        .getElementById("newSearchButton")
        .addEventListener("click", newSearch);
}

// =====================================================
// ABRIR CHAMADO
// =====================================================

function openSupportRequest() {
    solutionArea.innerHTML = `
        <div class="ticket-card">

            <div class="ticket-header">

                <div class="ticket-icon">
                    🎫
                </div>

                <div>
                    <span>
                        SUPORTE DE TI
                    </span>

                    <h3>
                        Abrir chamado
                    </h3>
                </div>

            </div>

            <p>
                O problema não foi resolvido?
                Preencha os dados abaixo para entrar
                na fila de atendimento do suporte.
            </p>

            <form id="ticketForm">

                <div class="form-group">

                    <label>
                        ID do funcionário
                    </label>

                    <input
                        type="text"
                        id="employeeId"
                        placeholder="Ex: 000123"
                        required
                    >

                </div>

                <div class="form-group">

                    <label>
                        E-mail corporativo
                    </label>

                    <input
                        type="email"
                        id="employeeEmail"
                        placeholder="funcionario@empresa.com"
                        required
                    >

                </div>

                <div class="form-group">

                    <label>
                        Descrição do problema
                    </label>

                    <textarea
                        id="ticketDescription"
                        rows="4"
                        placeholder="Descreva o problema..."
                        required
                    ></textarea>

                </div>

                <button
                    type="submit"
                    class="ticket-submit"
                >
                    🎫 Enviar chamado
                </button>

            </form>

        </div>
    `;

    document
        .getElementById("ticketForm")
        .addEventListener("submit", createTicket);

    solutionArea.scrollIntoView({
        behavior: "smooth"
    });
}

// =====================================================
// CRIAR CHAMADO
// =====================================================

function createTicket(event) {
    event.preventDefault();

    const employeeId =
        document.getElementById("employeeId").value;

    const email =
        document.getElementById("employeeEmail").value;

    const description =
        document.getElementById("ticketDescription").value;

    console.log("Chamado criado:", {
        employeeId,
        email,
        description
    });

    solutionArea.innerHTML = `
        <div class="success-card">

            <div class="success-icon">
                ✓
            </div>

            <h3>
                Chamado aberto com sucesso!
            </h3>

            <p>
                Seu chamado foi registrado e
                encaminhado para a fila de atendimento.
            </p>

            <div class="ticket-number">
                Chamado #1042
            </div>

            <div class="ticket-status">
                🟡 Aguardando atendimento
            </div>

            <small>
                Funcionário: ${employeeId}<br>
                E-mail: ${email}
            </small>

            <button
                class="new-search-button"
                id="newSearchButton"
            >
                Voltar para o início
            </button>

        </div>
    `;

    document
        .getElementById("newSearchButton")
        .addEventListener("click", newSearch);
}

// =====================================================
// NOVA PESQUISA
// =====================================================

function newSearch() {
    problemInput.value = "";
    solutionArea.innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    problemInput.focus();
}

// =====================================================
// BOTÃO "ENCONTRAR SOLUÇÃO"
// =====================================================

solveButton.addEventListener("click", function () {
    const problem = problemInput.value.trim();

    if (problem === "") {
        problemInput.focus();
        return;
    }

    const solution = identifyProblem(problem);

    if (solution) {
        showSolution(solution);
    } else {
        consultarIA(problem);
    }
});

// =====================================================
// ENTER NO CAMPO DE PESQUISA
// =====================================================

problemInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        solveButton.click();
    }
});

// =====================================================
// CARDS DE PROBLEMAS COMUNS
// =====================================================

problemCards.forEach(card => {
    card.addEventListener("click", function () {
        const problem = card.dataset.problem;

        const solution = identifyProblem(problem);

        if (solution) {
            problemInput.value = problem;
            showSolution(solution);
        }
    });
});

// =====================================================
// USUÁRIO LOGADO
// =====================================================

const savedUser = localStorage.getItem("nexsupportUser");

// Verifica se existe usuário logado

if (!savedUser) {

    window.location.href = "login.html";

} else {

    const user = JSON.parse(savedUser);

    const userName = document.getElementById("userName");
    const userId = document.getElementById("userId");
    const userDepartment = document.getElementById("userDepartment");

    if (userName) {
        userName.textContent = user.nome;
    }

    if (userId) {
        userId.textContent = `ID: ${user.id}`;
    }

    if (userDepartment) {
        userDepartment.textContent = user.setor;
    }
}