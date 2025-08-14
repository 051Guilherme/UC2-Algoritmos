const ps = require("prompt-sync")
const prompt = ps()

let dicionario = {
    "nome":"Guilherme",
    "sobrenome":"Pereira",
    "idade":20,
    "cpf":"88070891068"
}
console.log(dicionario["nome"])
dicionario["idade"] = 21
console.log 