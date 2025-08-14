const ps = require("prompt-sync")
const prompt = ps()
// node .\Algoritimos\desafios.js

// potencia valor e de raiz quadrada
// Math.pow(2,3) valor potencia
// Math.sqrt(8,3) valor raiz

function potencia(a, b){
    return Math.pow(a, b)
}

let resultado = potencia(8, 2)
console.log(resultado)

function raiz(x){
    return Math.sqrt(x)
}
let res = raiz(81)
console.log(res)

// idade min = idade / 2 +7
//idade max = 2.(idade - 7)

function max(idade){
    return 2 * (idade - 7)
}
function min(idade){
    return idade/2 + 7
}
let idade =  28 //Number(prompt("Qual a idade? "))
let result = max(idade)
let result2 = min(idade)
console.log("Idade max: " + result, "\nIdade min: " + result2)


let comprimento = Number(prompt("Qual o comprimento? "))
let largura = Number(prompt("Qual a largura? "))
let areaTotal = areaTerreno(comprimento, largura)

function areaTerreno(comprimento, largura){
    return comprimento * largura
}

function valorTerreno(a,){
    if (a === "bairro"){
    return areaTotal * 7
    }else{ a === "centro"
        return  areaTotal* 14

    }
}
let a = prompt("qual o local: ")
let valor = valorTerreno(a)
console.log(valor + "Por metro quadrado!! ")

