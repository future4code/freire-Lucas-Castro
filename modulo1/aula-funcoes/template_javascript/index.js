/* 1.A)10 e 50
    B)Não apareceria nada no console.

    2.A)Essa função transforma o texto em minúsculo e adiciona true ou false para presenca da palavra cenoura.
    B)i.eu gosto de cenoura true
    ii.cenoura é bom pra vista true
    iii.cenouras crescem na terra true





Exercício 1
A.
let funcao = function (){
    return("Eu sou Lucas,tenho 27 anos, moro em Goiânia e sou estudante.")
}
console.log(funcao)


B.
function informarDados (){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)

let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')
let endereco = prompt('Digite seu endereço')
let profissao =prompt('Digite sua profissão')
informarDados(nome, idade, endereco, profissao)

function numero (){

}

Exercício 2
A.
function soma(numero1,numero2){
    return numero1+numero2
}
    
console.log(soma(2,5))

B.
let n1 = +prompt('digite um numero')
let n2 = +prompt('digite outro numero')

function funcao(n1,n2){
    return n1>=n2
}
console.log(funcao(n1,n2))

C.
let n1= +prompt('Digite um numero')

function funcao(n1){
    return n1%2===0
}
console.log(funcao(n1))

D.
let frase = prompt("Digite uma frase")
let tamanho = frase.length
function funcao(frase){
    frase = frase.toUpperCase()
    return frase
    
}
console.log(tamanho,funcao(frase))

Exercício 3

let n1 = +prompt("digite um número:")
let n2 = +prompt("digite outro número:")

function soma(n1,n2){
    return n1+n2}

function diferenca(n1,n2){
    return n1-n2}

function multiplicacao(n1,n2){
    return n1*n2}

function divisao(n1,n2){
    return n1/n2}

    console.log(`Números inseridos:`,n1 +` e`,n2)
    console.log(`Soma: ${soma(n1,n2)}
Diferença: ${diferenca(n1,n2)}
Multiplicação: ${multiplicacao(n1,n2)}
Divisão: ${divisao(n1,n2)}`)*/    














