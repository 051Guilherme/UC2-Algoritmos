const ps = require("prompt-sync")
const prompt = ps()

//  Arthur e Guilherme

function deposit(dep, balance){
    return dep + balance
}
let balance = 800
console.log("Your current balance is: " + balance)
let dep = Number(prompt("how much do you want to deposit? " ))
console.log("Your current balance is: " + (dep + balance))
let conta = deposit(dep, balance)

function saque(value){
    if (conta <= value){
        return console.log("insufficient balance! ")
    }
    if (conta > value){
    return conta - value + ("Your current balance is: ") 
}
}
let value = Number(prompt("how much will you withdraw? "))
let bank = saque(value)
console.log(bank)