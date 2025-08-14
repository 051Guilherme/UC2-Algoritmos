const ps = require("prompt-sync")
const prompt = ps()
// node .\Algoritimos\frete.js

let tipoEntrega = prompt("Defina o tipo da entrega: ").toLowerCase( )
let km = romptp("Quantos KM: ")

function calculaNormal(km){
    return km * 0.50
}

function calculaExpresso(km){
    if (km > 100){
        return km * 1
    }else{
    return km * 0.75
    }
}

function calculaSedex(km){
    if (km > 100){
        return km * 1.20
    }else{ 
        return km * 0.85
    }
}

function calculaFedex(km){
    if (km > 100){
        return km * 1.60
    }else{
    return km * 1.22
    }
}

function mostraValor(valor){
    console.log(valor)
}
if (tipoEntrega === "normal"){
    valor = calculaNormal(km)
    mostraValor(valor)
}
else if (tipoEntrega === "expresso"){
    valor = calculaExpresso(km)
    mostraValor(valor)
}
else if (tipoEntrega === "sedex" ){
    valor = calculaSedex(km)
    mostraValor("$: " + valor)
}
else if (tipoEntrega === "fedex"){
    valor = calculaFedex(km)
    mostraValor("$:  " + valor)
}
else{
    console.log("Esse tipo nao existe!! ")
}
