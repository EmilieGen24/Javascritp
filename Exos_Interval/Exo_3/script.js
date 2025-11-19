/*Exercice 3 : Message clignotant (DOM)
Énoncé : Affiche un message qui clignote toutes les 500 millisecondes.
1. Dans ton HTML, ajoute un élément <div id="blink"></div> pour le message.
2. Utilise setInterval pour afficher et masquer le message "Clignotant..." toutes les
500 millisecondes.*/

const message = document.getElementById('blink')

function blinked () {
    message.textContent == 'Clignotant...'
}

const interval = setInterval(blinked, 500)

