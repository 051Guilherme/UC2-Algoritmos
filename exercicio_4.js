const ps = require("prompt-sync")
const prompt = ps()

//  Arthur e Guilherme

function notes(type, x, y, z,){
  if(type === "arithmetic"){
    let a =  (x + y + z) / 3
    if (a >= 9.5){
        return "A"
    }if(a < 7){
        return "D"
    }if (a >= 7 && a < 8.5){
        return "C"
    }if (a >= 8.5 && a < 9.6){
        return "B"
    }

  }if(type === "weighted"){
    let s = (x*1) + (y*2) + (z*3)
    let peso = 1+2+3
    let cal = s/peso
    if (cal >= 9.5){
      return "A"
  }if(cal < 7){
      return "D"
  }if (cal >= 7 && cal < 8.5){
      return "C"
  }if (cal >= 8.5 && cal < 9.6){
      return "B"
  }
}
}
let type = prompt("Choose your media type (arithmetic or weighted): ")
let x = Number(prompt("Enter your note: "))
let y = Number(prompt("Enter your note: "))
let z = Number(prompt("Enter your note: "))
console.log(notes(type, x, y, z))