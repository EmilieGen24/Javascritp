// 7. Inverser les mots dans une phrase

let sentence = "I love programing"

function reverseWords (sentence){
    let Array = sentence.split(" ")
    let ReversedArray = Array.reverse()
    let result = ReversedArray.join(" ")
    return result
}

console.log(reverseWords(sentence))