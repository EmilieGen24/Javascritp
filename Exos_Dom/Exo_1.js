// Afficher un message selon la valeur saisie
const button = document.createElement("button")
button.textContent = "Valider"
document.body.append(button)

const input = document.getElementById("userInput")
const message = document.getElementById("message")

const bonjour = "Bonjour"
const bye = "Au revoir"

button.addEventListener("click", function(){
    if(input.value === bonjour){
        message.textContent = "Bonne journée !"
        message.classList.add("text-green")
    } else if (input.value === bye) {
        message.textContent = "A la prochaine !"
        message.classList.add("text-green")
    } else {
        message.textContent = "Je ne comprends pas"
        message.classList.add("text-red")
    }  
})


