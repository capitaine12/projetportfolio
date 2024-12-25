// Fonction pour synchroniser les classes actives
function syncActiveMenu(linkId) {
    // Supprimer toutes les classes 'active' des deux menus
    document.querySelectorAll('.sidebar .nav a, .navigation-icons .icon').forEach(link => {
        link.classList.remove('active');
    });

    // Ajouter la classe 'active' aux éléments correspondants
    document.querySelector(`#menu-${linkId}`)?.classList.add('active');
    document.querySelector(`#${linkId}`)?.classList.add('active');
}

// Ajouter un écouteur d'événements sur tous les liens des deux menus
document.querySelectorAll('.sidebar .nav a, .navigation-icons .icon').forEach(link => {
    link.addEventListener('click', function (e) {
        // Empêcher le comportement par défaut si nécessaire
        if (this.tagName === 'A' && this.getAttribute('href') === '#') {
            e.preventDefault();
        }

        // Synchroniser les classes actives
        const linkId = this.id.replace('menu-', ''); // Récupérer l'identifiant
        syncActiveMenu(linkId);
    });
});
