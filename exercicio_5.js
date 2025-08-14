const ps = require("prompt-sync")
const prompt = ps()

//  Arthur e Guilherme

function salary(position, value){
    if(position === "101"){
        let m = (value / 100) * 10
        return value + m
    }if(position === "102"){
        let e = (value / 100) * 20
        return value + e
}if(position === "103"){
    let t = (value / 100) * 30
    return value + t
}else{
    let d = (value / 100) * 40
    return value + d
}
}
let position = prompt("What is your position \n(manager (101), \nengineer (102), \ntechnical (103), \nother (104)): ")
let value = Number(prompt("What is your salary? "))
let res = salary(position, value)
console.log("Your new salary is " + res)