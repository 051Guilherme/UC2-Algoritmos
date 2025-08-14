const ps = require("prompt-sync")
const prompt = ps()

let pilhaVoltar = ["site", "site2", "site 3"]
let pilhaAvançar =[]
let seleçao = Number(prompt("1 ou 2" ))

function desempilha(selaçao){
if (seleçao === 1){
    let removido = pilhaVoltar.pop()
    pilhaAvançar.push(removido)
    }else if (selaçao === 2){
        let removido  = pilhaAvançar.pop()
        pilhaAvançar.push(removido)
    }
    console.log(pilhaAvançar)
    console.log(pilhaVoltar)
}
desempilha(1)