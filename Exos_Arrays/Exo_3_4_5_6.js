// 3. Optimiser le code
let fruits = ["apple", "banana", "cherry", "apple"]

console.log(fruits)

// 4. Créer une fonction : Inverser un tableau
// Créer une fonction reverseArray(arr) qui retourne le tableau inversé.

function reverseArray(fruits) {
    console.log(fruits.reverse())
}
reverseArray(fruits)

// 5. Compter les occurrences d'un élément dans un tableau
// Crée une fonction countOccurrences(arr, value) qui retourne le nombre de fois que
// value apparaît dans le tableau.
let value = fruits
function countOccurrences(fruits,value) {
    console.log(fruits.length)
}
countOccurrences(fruits,value)

// 6.Trouver l'élément le plus fréquent dans un tableau
// Écris une fonction mostFrequent(arr) qui retourne l'élément le plus fréquent dans un
// tableau.

function mostFrequent(arr) {
    let most = arr[0]   
    let maxCount = 1

    for (let i = 0; i < arr.length; i++) {
        let count = 0    
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count
            most = arr[i]
        }
    }

    return most;
}

console.log(mostFrequent(fruits))
