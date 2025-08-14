const ps = require("prompt-sync")
const prompt = ps()
 
let usuarios = []

function cadastro(nome, sobrenome, idade){
    nome = prompt("Qual seu nome: ")
    sobrenome = prompt("Qual seu sobrenome: ")
    idade = Number(prompt("Qual sua idade: "))
    let dados = {"nome: ": nome, "sobrenome:": sobrenome, "idade: ": idade}
    usuarios.push(dados)
    console.log(usuarios)
    
}
while(usuarios.length < 4){
    cadastro()
}

