// 2. Calculatrice simple

const input1 = document.getElementById("number1")
const input2 = document.getElementById("number2")
const results = document.getElementById("result")
const button = document.getElementById("calculate")

button.addEventListener("click", function(){
    let number1 = input1.value
    let number2 = input2.value
    const result = Number(number1) + Number(number2)
    results.textContent+=result
})
