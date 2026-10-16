// =====================================================
// VERIFICAR LOGIN
// =====================================================

const savedUser =
    localStorage.getItem("nexsupportUser");


if (!savedUser) {

    window.location.href = "login.html";

}


// =====================================================
// USUÁRIO
// =====================================================

const user = JSON.parse(savedUser);


document.getElementById("userName").textContent =
    user.nome;

document.getElementById("userId").textContent =
    `ID: ${user.id}`;

document.getElementById("userDepartment").textContent =
    user.setor;


// =====================================================
// FAQ - ABRIR / FECHAR
// =====================================================

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faq =
            question.parentElement;


        faq.classList.toggle("open");

    });

});


// =====================================================
// PESQUISA
// =====================================================

const searchInput =
    document.getElementById("helpSearch");

const faqItems =
    document.querySelectorAll(".faq-item");


searchInput.addEventListener("input", function () {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    faqItems.forEach(function (item) {

        const text =
            item.dataset.search.toLowerCase();


        if (text.includes(search)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

});


// =====================================================
// CATEGORIAS
// =====================================================

const categories =
    document.querySelectorAll(".help-category");


categories.forEach(function (category) {

    category.addEventListener("click", function () {

        const selectedCategory =
            category.dataset.category;


        searchInput.value = "";


        faqItems.forEach(function (item) {

            const itemCategory =
                item.dataset.category;


            if (itemCategory === selectedCategory) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});