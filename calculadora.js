const ps = require("prompt-sync")
const prompt = ps()
// node .\Algoritimos\calculadora.js

let operaçao = prompt("Qual a operaçao (+; -; /; *): ")
let n1 = Number(prompt("Numero para calcular: "))
let n2 = Number(prompt("Numero para calcular: "))

function adiçao(n1, n2){
    return n1 + n2
}
function subtraçao(n1, n2){
    return n1 - n2
}
function divisao(n1, n2){
    return n1 / n2
}
function multiplicaçao(n1, n2){
    return n1 * n2
}
function resultado(res){
console.log(res)
}
    if (operaçao === "+"){
    res = adiçao(n1, n2)
    resultado(res)
}
    else if (operaçao === "-"){
    res = subtraçao(n1, n2)
    resultado(res)
}
    else if (operaçao === "/"){
        res = divisao(n1, n2)
        resultado(res)
}
    else if (operaçao === "*"){
        res = multiplicaçao(n1 ,n2)
        resultado(res)
}
else{
    console.log("Essa operaçao nao existe!")
}