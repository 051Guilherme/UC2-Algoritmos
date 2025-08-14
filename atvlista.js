const ps = require("prompt-sync")
const prompt = ps()

// menor

let numeros = [6, 5, 8, 10, 0, 15, 20]
menor_valor = numeros[0];

for(numeros of numeros){
    if (numeros < menor_valor){
   menor_valor = numeros
}
}
console.log(menor_valor)

// maior

let num = [20, 5, 40, 10, 0, 15, 7]
maior_valor = num[0];

for(num of num){
    if (num > maior_valor){
   maior_valor = num
}
}
console.log(maior_valor)

// achar o numero

let achar = [0, 8, 64, 864]
nume = Number(prompt("Qual o numero? "))

    if (nume === achar[3]){
        return console.log("Achou ")

    }else if (num != achar[3]){
    console.log(":( ")
    }

