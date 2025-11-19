/*Exercice 1 : Salutation différée
Énoncé : Crée un message de bienvenue sur la page après un court délai.
1. Dans ton HTML, ajoute un élément <div id="welcome"></div>.
2. Utilise setTimeout pour afficher "Bienvenue dans le monde du JavaScript !" dans
ce <div> après 2 secondes */

const message = document.getElementById("welcome")

setTimeout(function(){
    message.textContent="Bienvenue dans le monde du JavaScript"
},2000)