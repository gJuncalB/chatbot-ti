// =====================================================
// VERIFICAR LOGIN
// =====================================================

const savedUser =
    localStorage.getItem("nexsupportUser");


if (!savedUser) {

    window.location.href = "login.html";

}


// =====================================================
// USUÁRIO LOGADO
// =====================================================

const user = JSON.parse(savedUser);


// =====================================================
// MOSTRAR DADOS DO USUÁRIO
// =====================================================

document.getElementById("userName").textContent =
    user.nome;

document.getElementById("userId").textContent =
    `ID: ${user.id}`;

document.getElementById("userDepartment").textContent =
    user.setor;


// =====================================================
// CHAMADOS DE TESTE
// =====================================================

const chamados = [

    {
        id: "1042",
        funcionarioId: "000123",
        problema: "Computador desligando sozinho",
        descricao: "Computador desliga após alguns minutos de uso.",
        status: "andamento",
        data: "10/09/2026"
    },

    {
        id: "1038",
        funcionarioId: "000123",
        problema: "Impressora não imprime",
        descricao: "A impressora aparece como offline.",
        status: "resolvido",
        data: "08/09/2026"
    },

    {
        id: "1031",
        funcionarioId: "000123",
        problema: "Internet lenta",
        descricao: "Conexão muito lenta durante o expediente.",
        status: "aberto",
        data: "06/09/2026"
    },

    {
        id: "1027",
        funcionarioId: "000124",
        problema: "Problema com áudio",
        descricao: "Computador sem saída de áudio.",
        status: "resolvido",
        data: "05/09/2026"
    }

];


// =====================================================
// PEGAR APENAS CHAMADOS DO USUÁRIO
// =====================================================

const meusChamados = chamados.filter(function (chamado) {

    return chamado.funcionarioId === user.id;

});


// =====================================================
// ELEMENTO DA LISTA
// =====================================================

const ticketsList =
    document.getElementById("ticketsList");


// =====================================================
// MOSTRAR CHAMADOS
// =====================================================

function mostrarChamados(lista) {

    ticketsList.innerHTML = "";


    if (lista.length === 0) {

        ticketsList.innerHTML = `

            <div class="empty-tickets">

                <div class="empty-icon">
                    🎫
                </div>

                <h3>
                    Nenhum chamado encontrado
                </h3>

                <p>
                    Você ainda não possui chamados
                    nessa categoria.
                </p>

                <a
                    href="index.html"
                    class="new-search-button"
                >
                    Encontrar uma solução
                </a>

            </div>

        `;

        return;
    }


    lista.forEach(function (chamado) {

        const statusInfo =
            obterStatus(chamado.status);


        const card = document.createElement("div");

        card.classList.add("ticket-item");


        card.innerHTML = `

            <div class="ticket-item-top">

                <div>

                    <span class="ticket-id">
                        #${chamado.id}
                    </span>

                    <h3>
                        ${chamado.problema}
                    </h3>

                </div>

                <span
                    class="ticket-status ${chamado.status}"
                >
                    ${statusInfo.icone}
                    ${statusInfo.nome}
                </span>

            </div>


            <p class="ticket-description">
                ${chamado.descricao}
            </p>


            <div class="ticket-item-bottom">

                <span>
                    📅 Aberto em ${chamado.data}
                </span>

                <button
                    class="details-button"
                    onclick="verChamado('${chamado.id}')"
                >
                    Ver detalhes →
                </button>

            </div>

        `;


        ticketsList.appendChild(card);

    });

}


// =====================================================
// STATUS
// =====================================================

function obterStatus(status) {

    if (status === "aberto") {

        return {
            nome: "Aberto",
            icone: "🔵"
        };

    }


    if (status === "andamento") {

        return {
            nome: "Em atendimento",
            icone: "🟡"
        };

    }


    if (status === "resolvido") {

        return {
            nome: "Resolvido",
            icone: "🟢"
        };

    }

}


// =====================================================
// FILTROS
// =====================================================

const filterButtons =
    document.querySelectorAll(".filter-button");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filtro =
            button.dataset.filter;


        if (filtro === "todos") {

            mostrarChamados(meusChamados);

            return;

        }


        const filtrados =
            meusChamados.filter(function (chamado) {

                return chamado.status === filtro;

            });


        mostrarChamados(filtrados);

    });

});


// =====================================================
// VER DETALHES
// =====================================================

function verChamado(id) {

    const chamado =
        meusChamados.find(function (item) {

            return item.id === id;

        });


    if (!chamado) {
        return;
    }


    alert(

        `Chamado #${chamado.id}\n\n` +

        `Problema: ${chamado.problema}\n` +

        `Descrição: ${chamado.descricao}\n\n` +

        `Status: ${obterStatus(chamado.status).nome}\n` +

        `Data: ${chamado.data}`

    );

}


// =====================================================
// INICIALIZAÇÃO
// =====================================================

mostrarChamados(meusChamados);