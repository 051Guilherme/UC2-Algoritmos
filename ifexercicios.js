const ps = require("prompt-sync")
const prompt = ps()
// node .\Algoritimos\ifexercicios.js


let nome = prompt ("Qual seu nome: ")
if (nome === "Guilherme"){
    console.log("Logado")
}if (nome !== "Guilherme"){
    console.log("Nao logado")
}


let nota = prompt ("Nota: ")
if (nota >= 7){
    console.log("Aprovado")
}if (nota < 7){
    console.log("Reprovado")
}


let lado1 = prompt ("Lado: ")
let lado2 = prompt ("Lado: ")
let lado3 = prompt ("Lado: ")
if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
    console.log("Equilátero")
}else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Isóceles")
}else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    console.log("Escaleno")
}


let user = prompt ("User: ")
let senha = prompt ("Senha: ")
if (user === "admin" && senha === "admin"){
    console.log("User ADM")
}else if (user === "editor" && senha === "editor"){
    console.log("User Editor")
}else if (user === "usuario" && senha === "usuario"){
    console.log("User Padrao")
}else if (user !== "admin" || user !== "editor" || user !== "usuario"){
    console.log("User Nao Encontrado")
}

//let lista = ["Gustavo", "Pedro", "Guilherme", "Bruno"]

//for (i = 0; i< lista.length, i++; ){

    //nome = lista[i]
    //if(nome === "Guilherme"){
        //return console.log("Guilherme")
    //}
//}