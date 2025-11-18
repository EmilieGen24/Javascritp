// 3. Optimiser le code
let fruits = ["apple", "banana", "cherry"]
fruits.forEach(fruit => console.log(fruit))

for(let fruit of fruits) {
    console.log(fruit)
}

for(let i = 0;i < fruits.length; i++) {
    console.log(fruits[i])
}

// 4. Créer une fonction : Inverser un tableau
// Créer une fonction reverseArray(arr) qui retourne le tableau inversé.

let fruits = ["apple", "banana", "cherry"]
const reverseArray = (array) => {
    const newArray = []
    array.forEach((item, index) => newArray.unshift(array[index]))
    return newArray
}

console.log(reverseArray(fruits))

// 5. Compter les occurrences d'un élément dans un tableau
// Crée une fonction countOccurrences(arr, value) qui retourne le nombre de fois que
// value apparaît dans le tableau.
let fruits = ["apple", "banana", "cherry", "banana", "banana", "cherry"]

const countOccurrences = (arr, value) => {
    let count = 0
    arr.forEach(item => {
        if (item === value)
            count++
    })
    return count
}

console.log(countOccurrences(fruits, "cherry"))

const countOccurrencesForOf = (arr, value) => {
    let count = 0
    for(let item of arr) {
        if (item === value)
            count++
    }
    return count
}

console.log(countOccurrencesForOf(fruits, "cherry"))

// 6.Trouver l'élément le plus fréquent dans un tableau
// Écris une fonction mostFrequent(arr) qui retourne l'élément le plus fréquent dans un
// tableau.

let fruits = ["apple", "banana", "cherry", "banana", "apple", "cherry"]

const countOccurrences = (arr, value) => {
    let count = 0
    arr.forEach(item => {
        if (item === value)
            count++
    })
    return count
}

function  mostFrequent(arr) {
    let maxOccurrence = 0
    let result = ''
    arr.forEach(fruit => {
        const count = countOccurrences(arr, fruit)
        if(count > maxOccurrence) {
            result = fruit
            maxOccurrence = count
        }
    })
    return result
}

console.log(mostFrequent(fruits))
