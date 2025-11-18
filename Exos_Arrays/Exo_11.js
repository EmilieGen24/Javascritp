// 11. Vérifier si un tableau est trié
// Écris une fonction isSorted(arr) qui vérifie si les éléments d'un tableau sont triés dans
// l'ordre croissant.

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

let numbers = [1, 2, 3, 4, 5];
console.log(isSorted(numbers));