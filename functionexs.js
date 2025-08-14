const ps = require("prompt-sync")
const prompt = ps()
//// node .\Algoritimos\functionexs.js

function soma(a , b){
    return a + b
}
let a = Number(prompt ("Numero: "))
let b = Number(prompt ("Numero: "))
 let r = soma (a , b)
console.log (r)

function maior(g , p){
    if (g > p){
        return g
    }else if (p > g){
        return p
    }else if (g === p){
        return g
    }
}
let g = Number(prompt ("Numero: "))
let p = Number(prompt ("Numero: "))
let res = maior (g , p)
console.log(res)

function verificar(x){
    if (x > 0){
        return "Positivo"

    }else if (x < 0){
    return "Negativo"

    }else if (x === 0){
    return "Zero"
    }
}
let x = Number(prompt ("Numero: "))
let sinal = verificar(x)
console.log(sinal)

function letra(y){
 if (y === "a" || y === "e" || y === "i" || y === "o" || y ==="u"){
    return "Vogal"
 }else if (y !== "a" || y !== "e" || y !== "i" || y !== "o" || y !=="u"){
    return "Nao é vogal"
 }
}
let y = prompt("Letra: ")
let vogal = letra(y)
console.log(vogal)


function votar(idade, esm){
    if (idade > 16 && esm === "Sim"){
        return "Pode votar"
}else{
    return "Nao pode votar"
}
}
let idade = Number(prompt("Idade: "))
let esm = prompt("Possui Ensino Medio Completo? ")
let permissao = votar(idade, esm)
console.log(permissao)

function calcularFrete(distancia, tipo){
    if (tipo = "Normal"){
        let frete = distancia * 0.50
        return frete
    }else if (tipo = "Expresso"){
       if (distacia <= 100){
       let frete2 = distancia * 0.75
    return frete2
    }else if (distancia > 100){
        let frete3 = distancia
        return frete3
    }
}
}
let distancia = Number(prompt("Qual a distancia?" ))
let tipo = prompt("Tipo Expresso ou Normal? ")
let valor = calcularFrete(distancia, tipo)
console.log(valor)

