const ps = require("prompt-sync")
const prompt = ps()

//  Arthur e Guilherme

function distance(x1, y1, x2, y2){
    let dx = x1 - x2
    let dy = y1 - y2
    return Math.sqrt(dx * dx + dy * dy)
}
let x1 = 2; y1 = 4; x2 = 7; y2 = 1
console.log("The distance is: " + distance(x1, y1, x2, y2))