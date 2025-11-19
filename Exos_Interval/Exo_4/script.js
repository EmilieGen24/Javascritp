/*Exercice 4 : L'horloge en temps réel (DOM)
Énoncé : Affiche une horloge en temps réel qui met à jour l'heure chaque seconde.
1. Dans ton HTML, ajoute un élément <div id="clock"></div>.
2. Utilise setInterval pour afficher l’heure actuelle (heures:minutes
) dans ce <div> et mettre à jour chaque seconde.*/

const clock = document.getElementById("clock")

function clocked(){
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let time = `${hours}:${minutes}:${seconds}`
    clock.textContent = time
}

const interval = setInterval(clocked,1000)


