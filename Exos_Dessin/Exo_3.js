// 3.Carré
// Reproduire un carré vide comme sur l'image suivante sa taille dépendra d'une entrée utilisateur

const black = "⬛"
const white = "⬜"

const size = 15

for (let i = 0; i < size; i++) {
    let row = ""

    for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            row += black
        } else {
            row += white
        }
    }
    console.log(row)
}