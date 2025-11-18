/*
9. Créer une fonction : Fusionner deux tableaux
Crée une fonction mergeArrays(arr1, arr2) qui fusionne deux tableaux en un seul,
sans utiliser concat()
*/
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));