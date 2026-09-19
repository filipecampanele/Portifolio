// =========================
// MENU MOBILE
// =========================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const menuIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuIcon.classList.toggle("bi-list", !isOpen);
    menuIcon.classList.toggle("bi-x-lg", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);

});


// =========================
// FECHAR MENU AO CLICAR
// =========================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

        menuIcon.classList.add("bi-list");
        menuIcon.classList.remove("bi-x-lg");

        menuButton.setAttribute("aria-expanded", "false");

    });

});


// =========================
// CABEÇALHO E BOTÃO "VOLTAR AO TOPO" CONFORME A ROLAGEM
// =========================

const header = document.querySelector(".header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    header.classList.toggle("scrolled", window.scrollY > 20);
    backToTop.classList.toggle("visible", window.scrollY > 400);

});

backToTop.addEventListener("click", function () {

    window.scrollTo({ top: 0, behavior: "smooth" });

});


// =========================
// LINK ATIVO CONFORME A SEÇÃO VISÍVEL
// =========================

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            const id = entry.target.getAttribute("id");

            navLinks.forEach(function (link) {

                link.classList.toggle("active", link.getAttribute("href") === "#" + id);

            });

        }

    });

}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach(function (section) {

    sectionObserver.observe(section);

});


// =========================
// ANO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
