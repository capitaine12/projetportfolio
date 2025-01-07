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

/**************************************************************************************** */

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Empêcher l'envoi réel du formulaire
  
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');
  
  // Réinitialiser les messages
  formMessage.className = 'hidden';
  
  // Vérification des champs
  if (!firstName || !lastName || !email || !message) {
    formMessage.textContent = 'Tous les champs sont obligatoires.';
    formMessage.className = 'error';
    return;
  }
  
  if (!validateEmail(email)) {
    formMessage.textContent = 'Veuillez entrer une adresse email valide.';
    formMessage.className = 'error';
    return;
  }
  
  // Si tout est valide
  formMessage.textContent = 'Votre message a été envoyé avec succès !';
  formMessage.className = 'success';
  
  // Réinitialiser le formulaire
  this.reset();
});

// Fonction de validation de l'email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



