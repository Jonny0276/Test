let random = Math.random () * 2
let random2 = Math.random () * 2
let randomround2 = Math.round (random2);
let randomround = Math.round (random);
console.log (randomround)
console.log (randomround2)







let cleaners = ["John","Joe","Jack"];

let nameOfCleanerElement = document.getElementById ("nameOfCleaner");


let outputText = "Tafeldienst hat " + cleaners[randomround]; 

nameOfCleanerElement.innerHTML = outputText;
console.log(randomround2 + randomround);