const ps = require("prompt-sync")
const prompt = ps()

//  Arthur e Guilherme


let a = 3; b = 4; c = 2
let r = (a + b)
let resR = (r * r)
let s = b + c
let resS = (s * s)
let d = (resR + resS) / 2


console.log("The result is: " + d)
