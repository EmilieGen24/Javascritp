// Galerie d'images interactive

const image = document.querySelectorAll(".thumbnail")
const element = document.getElementById("mainImage")

image.forEach(img =>{
    img.addEventListener("click", function(){
    element.src = img.src
    })
})

