// =========================
// MENU MOBILE
// =========================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// =========================
// FECHAR MENU AO CLICAR
// =========================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// =========================
// ANO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();