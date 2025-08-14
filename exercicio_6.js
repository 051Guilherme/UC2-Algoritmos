const ps = require("prompt-sync")
const prompt = ps()

let ray = Number(prompt("choose the radius of the sphere: "))
let cal = ray*ray*ray
let calculation = 4/3*3.14*cal
console.log(calculation)