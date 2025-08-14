const ps = require("prompt-sync")
const prompt = ps()

//  Arthur e Guilherme


function account(order, quantity){
    if (order === 100){
        return quantity * 1.20
    }if(order === 101){
        return quantity * 1.30
    }if(order === 102){
        return quantity * 1.50
    }if(order === 103){
        return quantity * 1.20
    }if(order === 104){
        return quantity * 1.30
    }if(order === 105){
        return quantity * 1
    }
}
let order = Number(prompt("What is your request? \nHotDog (100) \nSimple Bauru (101) \nBauru with egg (102) \nBurger (103) \nCheeseburguer (104) \nRefrigerant (105) ? "))
let quantity = Number(prompt("Quantity? "))
let result = account(order, quantity)
console.log(result)



