document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filter");
    const portfolioItems = document.querySelectorAll(".portfolio-grid img");

    filters.forEach(filter => {
      filter.addEventListener("click", () => {
        // Supprimer la classe active de tous les filtres
        filters.forEach(f => f.classList.remove("active"));

        // Ajouter la classe active au filtre sélectionné
        filter.classList.add("active");

        // Obtenir la catégorie sélectionnée
        const category = filter.textContent.toLowerCase().replace(/\s+/g, '-');

        // Afficher ou masquer les images selon la catégorie
        portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute("data-category");
          if (category === "all" || itemCategory === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });
/********************************************************************************** */
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Sélectionner toutes les images de la galerie
    const images = document.querySelectorAll(".portfolio-grid img");

    images.forEach(image => {
      image.addEventListener("click", () => {
        // Afficher la modale
        modal.style.display = "block";

        // Mettre à jour l'image et le texte
        modalImg.src = image.src;
        captionText.innerHTML = image.alt;
      });
    });

    // Fermer la modale
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Fermer la modale en cliquant à l'extérieur
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
/********************************************************************************** */
/*   document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".navigation ul li");
    const icons = document.querySelectorAll(".right-icons .icon");

    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        // Supprimer la classe active de tous les éléments
        menuItems.forEach(el => el.classList.remove("active"));
        icons.forEach(icon => icon.classList.remove("active"));

        // Ajouter la classe active à l'élément cliqué
        item.classList.add("active");

        // Activer l'icône correspondante
        const iconId = item.getAttribute("data-icon");
        document.getElementById(iconId).classList.add("active");
      });
    });
  }); */
  

  /************************************************************************* */

  // Modal Toggle Logic
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('contact-modal');

openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
