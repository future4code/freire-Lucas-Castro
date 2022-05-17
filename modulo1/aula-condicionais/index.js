// Exercícios de interpretação:
// 1.A)O código faz um teste se o número é par, resto zero para divisão por 2.
// B)Para números pares.
// C)Para números ímpares.

// 2.A)Para determinar o preço de uma fruta inserida.
// B) O preço da fruta Maçã é R$2.25.
// C) O preço da fruta Pêra é R$5.

// 3.A)Solicitando que o usuário digite um valor e transformando ele em Number.
// B)10: Esse número passou no teste. -10:Erro
// C)Haverá um erro porque a declaração da variável mensagem deve ocorrer fora do bloco if.






// Exercício 1
// let idade = +prompt("Digite sua idade:")

// if (idade>18){
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// Exercício 2
//  let turno = prompt("Digite seu turno: M/V/N").toUpperCase()
//  let matutino = "M"
//  let vespertino = "V"
//  let noturno = "N"

// if (turno===matutino) {
//     console.log("Bom dia!")
// } else if (turno===vespertino){
//     console.log("Boa tarde!")
// } else if (turno===noturno) {
//     console.log("Boa noite")}

//Exercício 3
// let turno = prompt("Digite seu turno: M/V/N").toUpperCase()
// let matutino = "M"
// let vespertino = "V"
// let noturno = "N"

// switch (turno) {
//     case matutino:
//         console.log("Bom dia!")
//         break
//     case vespertino:
//         console.log("Boa tarde!")
//         break
//     case noturno:
//         console.log("Boa noite!")
//         break}

//Exercício 4/Desafio 1
// let genero = prompt("Digite o gênero do filme:")==="fantasia"
// let valorIngresso = +prompt("Digite o valor do ingresso:")<15

// if (genero&&valorIngresso) {
//     let lanchinho = prompt("Qual snack você quer comprar?")
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu ${lanchinho}!`)
// } else {
//     console.log("Escola outro filme :(")
//}

// Desafio 2:
// let nome = prompt("Digite seu nome completo:")
// let tipoDeJogo = prompt("Digite o tipo de jogo: IN/DO").toUpperCase()
// let etapaDoJogo = prompt("Digite a etapa do jogo: SF/DT/FI").toUpperCase()
// let categoria = +prompt("Digite a categoria do jogo: 1/2/3/4")
// let quantidade = +prompt("Digite a quantidade de ingressos")
// let valor
// let valorTotal = preço*quantidade

// if (tipoDeJogo==="DO"){
//     if (categoria===1){
//         if(etapaDoJogo==="SF"){
//             valor=320
//             valorTotal = 1320*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=660
//             valorTotal = 660*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=1980
//             valorTotal = 1980*quantidade
//         }
//     }else if(categoria===2) {
//         if(etapaDoJogo==="SF"){
//             valor=880
//             valorTotal = 880*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=440
//             valorTotal = 440*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=1320
//             valorTotal = 1320*quantidade
//         }
//     }else if(categoria===3){
//         if(etapaDoJogo==="SF"){
//             valor=550
//             valorTotal = 550*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=330
//             valorTotal = 330*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=880
//             valorTotal = 880*quantidade
//         }
//     }else {
//         if(etapaDoJogo==="SF"){
//             valor=220
//             valorTotal = 220*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=170
//             valorTotal = 170*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=330
//             valorTotal = 330*quantidade
//         }
//     }
//     console.log(`
//     ---Dados da Compra---
//     Tipo do jogo:${tipoDeJogo}
//     Etapa do jogo:${etapaDoJogo}
//     Categoria:${categoria}
//     Quantidade de Ingressos:${quantidade}
//     ---Valores---
//     Valor do Ingresso: R$ ${valor}
//     Valor Total: R$ ${valorTotal} `)
// }else {
//     if (categoria===1){
//         if(etapaDoJogo==="SF"){
//             valor=1320/4,1
//             valorTotal = (1320/4,1)*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=660/4,1
//             valorTotal = (660/4,1)*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=1980/4,1
//             valorTotal = (1980/4,1)*quantidade
//         }
//     }else if(categoria===2) {
//         if(etapaDoJogo==="SF"){
//             valor= 880/4,1
//             valorTotal = (880/4,1)*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=440/4,1
//             valorTotal = (440/4,1)*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=1320/4,1
//             valorTotal = (1320/4,1)*quantidade
//         }
//     }else if(categoria===3){
//         if(etapaDoJogo==="SF"){
//             valor=550/4,1
//             valorTotal = (550/4,1)*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=330/4,1
//             valorTotal = (330/4,1)*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=880/4,1
//             valorTotal = (880/4,1)*quantidade
//         }
//     }else {
//         if(etapaDoJogo==="SF"){
//             valor=220/4,1
//             valorTotal = (220/4,1)*quantidade
//         }else if (etapaDoJogo==="DT"){
//             valor=170/4,1
//             valorTotal = (170/4,1)*quantidade
//         }else if (etapaDoJogo==="FI"){
//             valor=330/4,1
//             valorTotal = (330/4,1)*quantidade
//         }
//     }
//     console.log(`
//     ---Dados da Compra---
//     Tipo do jogo:${tipoDeJogo}
//     Etapa do jogo:${etapaDoJogo}
//     Categoria:${categoria}
//     Quantidade de Ingressos:${quantidade}
//     ---Valores---
//     Valor do Ingresso: $${valor}
//     Valor Total: $${valorTotal} `)}

