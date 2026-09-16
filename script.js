/* =========================
   NEXORA STUDIO — SCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU MOBILE
  ========================= */

  const menu = document.querySelector(".menu");
  const navigation = document.querySelector(".navigation");

  if (menu && navigation) {
    menu.addEventListener("click", () => {
      navigation.classList.toggle("open");
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
      });
    });
  }

  /* =========================
     ANNÉE AUTOMATIQUE
  ========================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* =========================
     FORMULAIRE DE CONTACT
  ========================= */

  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const offer = document.getElementById("offer")?.value || "";
      const message = document.getElementById("message")?.value.trim() || "";

      const destination = "damien.nicolas087@gmail.com";

      const subject = encodeURIComponent(
        "Demande de projet — Nexora Studio"
      );

      const body = encodeURIComponent(
`Bonjour Nexora Studio,

Nom / entreprise : ${name}
Email : ${email}
Offre souhaitée : ${offer}

Projet :
${message}

Cordialement,
${name}`
      );

      window.location.href =
        `mailto:${destination}?subject=${subject}&body=${body}`;
    });
  }

});
