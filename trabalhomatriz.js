const ps = require("prompt-sync")
const prompt = ps()


//CRIAR BOSS, ITEMS NO MAPA, OBSTACULOS E FAZER O PERSONAGEM ANDAR
function jogar(){
    while (true){
let mapa = [
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
    [" . "," . "," . "," . " ," . "," . "," . "," . "," . "," . "],
] 
function exibirMapa(){
    mapa.forEach(linha => {
        console.log(linha.join(''))
    })
}


function avançar(){
    let x = 0
    let y = 0
    let posiçaoX = x
    let posiçaoY = y
    if(mover === "w"){
        posiçaoY--
    }else if(mover === "s"){
        posiçaoY++
    }else if(mover === "a"){
        posiçaoX--
    }else if(mover === "d"){
        posiçaoX++
    }
    
}function podeAvançar(posiçaoX,posiçaoY){
    posiçaoY >= 0 &&
    posiçaoY < mapa.length &&
    posiçaoX >= 0 &&
    posiçaoX < mapa[0].length &&
    mapa[posiçaoY][posiçaoX] !== 0
}
let mover = (prompt(""))
if (mover === "w" || "a" || "s" || "d"){
    avançar()
}
if (podeAvançar(posiçaoX,posiçaoY)){
    mapa[x][y] = 0
    x = posiçaoX
    y = posiçaoY
    mapa[x][y] = "X"
    exibirMapa()
}

}
}
jogar()

    
    