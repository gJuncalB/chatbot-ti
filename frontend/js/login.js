const loginForm = document.getElementById("loginForm");

const loginError = document.getElementById("loginError");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const employeeId =
        document.getElementById("employeeId").value.trim();

    const employeeEmail =
        document.getElementById("employeeEmail").value.trim().toLowerCase();


    // ============================================
    // VALIDAÇÃO DOS CAMPOS
    // ============================================

    if (employeeId === "" || employeeEmail === "") {

        showError(
            "Preencha o ID e o e-mail corporativo."
        );

        return;
    }


    // ============================================
    // PROCURA O FUNCIONÁRIO
    // ============================================

    const usuarioEncontrado = usuarios.find(function (usuario) {

        return (
            usuario.id === employeeId &&
            usuario.email.toLowerCase() === employeeEmail
        );

    });


    // ============================================
    // FUNCIONÁRIO ENCONTRADO
    // ============================================

    if (usuarioEncontrado) {

        // Salva os dados do funcionário
        // para serem utilizados pelo restante do sistema

        localStorage.setItem(
            "nexsupportUser",
            JSON.stringify(usuarioEncontrado)
        );


        // Entra no sistema

        window.location.href = "index.html";

    }


    // ============================================
    // FUNCIONÁRIO NÃO ENCONTRADO
    // ============================================

    else {

        showError(
            "ID ou e-mail corporativo não encontrado. Verifique seus dados."
        );

    }

});


// ============================================
// MOSTRAR ERRO
// ============================================

function showError(message) {

    loginError.textContent = message;

    loginError.style.display = "block";

}