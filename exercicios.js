// Multiplicaçao (*); Divisao (/); Soma (+); Subtraçao (-);
// Resto da divisao (%);Somente a parte inteira da divisao (//)

// node .\Algoritimos\exercicios.js

// Area Quadrado
let lado = 2
let area_quadrado = lado*lado
console.log("Valor da area do quadrado = " + (area_quadrado))

// Area Triangulo
let base = 8
let altura = 16
let area_triangulo = base*altura/2
console.log("Valor da area do triangulo =  " + (area_triangulo))

// Area Losangulo

let dmenor = 8
let dmaior = 4
let area_losangulo = dmaior*dmenor/2
console.log("Valor da area do triangulo = " + (area_losangulo))

// Area do circulo

let raio = 6
let pi = 3.14
let area_circulo = (raio**2)
let resultado = (area_circulo * pi) / 2
console.log("Valor da area do circulo = " + (resultado))

// Media

let a1 = 8
let a2 = 64
let a3 = 24
let a4 = 33
let media = (a1+a2+a3+a4) /4
console.log("Qual o valor da media = " + (media))

// Converter C para F e para K

let celcius = 24
let fahrenheit = celcius*1.8 + 32
let kelvin = (fahrenheit+459.67) /1.8 
console.log("Resultado = " + (kelvin))



// (===) Igualdade; (==!) Diferente; (>) Maior; (<) Menor

// Calculo IMC

let peso = 62
let tamanho = 1.71
let imcr = tamanho**2
let imc = peso/imcr
if (imc <= 25) {
    console.log("Peso Normal")

} else if (imc >= 26){
    console.log("Excesso de peso")
}
else{}

//Notas

let nota = 9
let nota2 = 3.4
let nota3 = 15
let nota4 = 7
let mnotas = (nota+nota2+nota3+nota4) / 4 // 8.6
if (mnotas >= 9) {
    console.log("Conceito A = " + (mnotas)) 
}
else if (mnotas >= 7.5 && mnotas < 9){
    console.log("Conceito B = " + (mnotas))
}
else if (mnotas >= 6 && mnotas < 7){
    console.log("Conceito C = " + (mnotas))
}
else if (mnotas < 6){
    console.log("Conceito D = " + (mnotas))
}
else{}

// CNH

let idade = 19
let efc = true
let cnh = idade >= 18 && efc
if (cnh){
    console.log("Pode tirar a CNH ")
}
else{}

// for = loop

for (let n = 0;n<=5;n++){
    if (n % 2 === 0)
    console.log("Par = " + (n))
    else if (n % 2 === 1)
    console.log("Impar = " + (n))
}


// Senha, 8car,1 letra M, Pelo menos 1 
// como verificar quantas letras tem, se tem numero, se é M

let senha = "Colorado99"
let tam_senha = senha.length // .length verifica quantos caracteres tem
let mai = senha.match(/[A-Z]/) 
let num = senha.match(/[\d]/)
if (num && mai && tam_senha >= 8){
    console.log("Senha Valida")
}else{
    console.log("Senha Invalida")
}


//Angulos
let angulo = 145    
if (angulo <90){
    console.log("Angulo agudo")
}   if (angulo == 90){
    console.log("Angulo Reto")
}   if (angulo >90 && angulo <180){
    console.log("Angulo Obtuso")
}   if (angulo == 180){
    console.log("Angulo Raso")
}

// determinar a raiz de uma equaçao de 2 grau
// informar ax2 + bx + = 0
// delta = b2 +4ac se for > 0 tem , se for < 0 nao tem 

let A = 0
let B = 0
let C = -0
let delta = B**2+4*A*C
if (delta < 0){
    console.log("Nao existem raizes reais")
} if (delta === 0){
    console.log("Existem duas raizes reais e iguais")
} if (delta > 0){
    console.log("Existem duas raizes reais e distintas")
}

//


