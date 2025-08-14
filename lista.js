
const ps = require("prompt-sync")
const prompt = ps()


//LISTA

let lista = [800, 807]
lista.unshift(864)
lista.push(862)
lista.push(867)
lista.push(871)
lista.push(860)

console.log(lista[0])

// - .push "coloca" o numero ou sting  no []
// - .pop() remove o ultimo numero da lista
// - .unshift() coloca em primeira na lista; 
// - .splice(indice,0,valor) troca  numero
// - .splice(indice,valor) deleta numeros a partir do indice

//-------------------------------------------------------------

//FILA =  FIFO first in firdt out

let fila = []
fila.push(5)
fila.push(6)

let valor = fila.shift() // .shift remove o primeiro da fila
console.log(valor)

//---------------------------------------------------------------


//Pilha = last in first out

let pilha = []
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.pop()
