/*Exercice 2 : Le compte à rebours
Énoncé : Crée un compte à rebours avant le début d'une activité.
1. Dans ton HTML, ajoute un élément <div id="countdown"></div>.
2. Utilise setInterval pour afficher un compte à rebours de 5 secondes dans ce
<div>.
3. Affiche chaque seconde le nombre de secondes restantes.
4. Quand le compte à rebours atteint 0, affiche "Go !" et arrête le compte à rebours*/

const count = document.getElementById('countdown')
const interval = setInterval(countdown, 1000)

let number = 5

function countdown(){
    number = number - 1
    if(number == 0) {
        number = 'Go !'
    }
    count.textContent = `${number}`
}

setTimeout(function(){
    clearInterval(interval)
},5000)
