document.getElementById('contactForm').addEventListener('submit', function(e) {
    
  
preventDefault(); 

// Empêche l'envoi du formulaire
       
const name = document.getElementById('name').value;

const email = document.getElementById('email').value;

const message = document.getElementById('message').value;


if (name && email && message) {
        
   
alert("Merci pour votre message, " + name + " !");
    } 
  
else {
     
alert("Veuillez remplir tous les champs.");
    }
});

    
const projectCards = document.querySelectorAll('article');

projectCards.

project
forEach((card) => {

    card.addEventListener('mouseenter', () => {

    style.transform = 'scale(1.05)';            
    
    style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        });
    
    });

addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });

