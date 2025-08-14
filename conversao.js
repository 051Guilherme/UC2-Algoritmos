const ps = require("prompt-sync")
const prompt = ps()
// node .\Algoritimos\conversao.js

function conversao(moeda, destino, valor){
    if (moeda === "USD"){
       if (destino === "BRL"){
       return valor * 5.15
       }
       if (destino === "EUR"){
        return valor * 1.45
    }
    
    }else if (moeda === "EUR"){
        if (destino === "BRL"){
            return valor * 5.60
        }
        }
}
let moeda = prompt("Qual sua moeda de origem (BRL; USD; EUR)? ")
let destino = prompt("Para qual moeda voce quer converter (BRL; USD; EUR)? ")
let valor = Number(prompt("Valor? "))
let resultado = conversao(moeda ,destino ,valor)
console.log(resultado)