const ps = require("prompt-sync")
const prompt = ps()

let playlist = ["Jesus chorou", "Samba de malandro", "Vai me dando corda", "A morte do autotune"]
let i = 0

function player(){
    console.log("Bem vindo!!! \nQual opção vai escolher?  \n1 - Adicionar música a playlist \n2 - Remover música da playlist (Pelo Indice) \n3 - Veja o Indice e as músicas da playlist \n4 - Proxima música \n5 - Voltar a música \n6 - Buscar música (Pelo Nome) \n7 - Buscar música (Pelo Indice) \n8 - Tocar música aleatória \n9 - Sair")

    while(true){
        let option = +prompt("Eae vai escolher qual? ")

    if (option === 1){
        let music = prompt("Qual música vai adicionar: ")
        playlist.push(music)
        console.log(playlist)

    }else if (option === 2){
        let iMusic = Number(prompt("Qual música vai remover: "))
        let r = 1
        let remove = playlist.splice(iMusic, r)
        console.log("Foi removida a música: " + remove + "\nEstão na playlist " + playlist)

    }else if(option === 3){
        console.log("Na playlist: ")
       seeMusic = playlist
       for(let i = 0; i < seeMusic.length; i++){
        console.log("Indice: ", i , "Música: ", seeMusic[i])
       }
    }else if(option === 4){
    i = (i + 1) % playlist.length
    console.log("Tocando: ", playlist[i])
    }else if(option === 5){
        if(i === 0){
            i = playlist.length-1
        }else{
            i -=1
        }
        console.log("Tocando: ", playlist[i])
    }else if(option === 6){
        let search = prompt("Qual música você vai escutar? ")
        let m = playlist.includes(search)
        if(m == false){
            console.log("Essa música você não colocou na playlist :( ")
        }else{
            console.log("Tocando: ", search)
        }
    }else if(option === 7){
        let numberM = Number(prompt("Qual o número da música? (Veja na opçõo 3) "))
        console.log("Tocando: ", playlist[numberM])
    }else if(option === 8){
        let random = Math.floor(Math.random() * playlist.length)
        console.log("Tocando: ", playlist[random])
       }else{ (option === 9)
        console.log("Até logo! ")
        break
       }
    }

}
player()
