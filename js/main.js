const form = document.getElementById('contact-form');
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Empêcher l'envoi réel du formulaire
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');
  
  // Réinitialiser les messages
  formMessage.textContent = '';
  formMessage.className = '';
  
  // Vérification des champs
  if (!name || !email || !message) {
    formMessage.textContent = 'Tous les champs sont obligatoires.';
    formMessage.classList.add('error');
    return;
  }
  
  if (!validateEmail(email)) {
    formMessage.textContent = 'Veuillez entrer une adresse email valide.';
    formMessage.classList.add('error');
    return;
  }
  
  // Si tout est valide
  formMessage.textContent = 'Votre message a été envoyé avec succès !';
  formMessage.classList.add('success');
  
  // Réinitialiser le formulaire
  this.reset();
});

// Fonction de validation de l'email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
