// 2. Damier
// Reproduire un damier avec des intervalles de X et d'espace comme sur l'image suivante, sa taille
// dépendra d'une entrée utilisateur


let black= "◼️"
let white= "◻️"

let size= 10

for (let i = 0; i < size; i++) {
  let row = ""
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      row += black
    } else {
      row += white
    }
  }
  console.log(row)
}