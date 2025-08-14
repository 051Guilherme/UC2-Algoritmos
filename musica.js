const ps = require("prompt-sync")
const prompt = ps()

let musicas = ["Jesus Chorou", "Avisa la pt3", "Mae Natureza", "Lapada Dela"]
let musicaAtual = 0

function avançar(musicas){
    if (musicaAtual > musicas.length-1){
        musicaAtual === 0
    }else {
        musicaAtual +=1
    }
    console.log("Tocando ", musicas[musicaAtual])
}



function retornar(musicas){
    if(musicaAtual === 0){
        musicaAtual = musicas.length-1
    }else{
        musicaAtual -=1
    }
    console.log("Tocando2 ", musicas[musicaAtual])

}
retornar(musicas)
indiceAtual = (indiceAtual - 1) % musicas.length