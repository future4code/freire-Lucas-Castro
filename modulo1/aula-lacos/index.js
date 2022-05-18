// Exercícios de interpretação:
// 1.O código está somando os valores de 1 a 4. Será impresso no console 10.
// 2.a)Será impresso no console todos os números maiores que 18.
// b)Não poderiamos usar o for of para acessar o índice dos elementos do array.
// 3.Seria impresso: 
// *
// **
// ***
// ****


// Exercício 1:
// let quantidadeDePets = +prompt("Digite a quantidade de pets que voce tem:")
// let quantidadeAtual= 0
// let nomeDosPets = []

// if (quantidadeDePets===0){
//     console.log("Que pena! Você pode adotar um pet")
// }else{
//     while(quantidadeAtual<quantidadeDePets){
//     let nomes = prompt ("Digite o nome do pet")
//     quantidadeAtual=quantidadeAtual+1
//     nomeDosPets.push(nomes)
// }}
// console.log(nomeDosPets)

// Exercício 2:
//let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A)
// const imprimir=(array)=>{
// for (i=0;i<arrayOriginal.length;i++){
//     console.log(arrayOriginal[i])
// }}
// imprimir(arrayOriginal)

// B)
// const imprimirDividido=(array)=>{
//      for (i=0;i<arrayOriginal.length;i++){
//          console.log(arrayOriginal[i]/10)
//      }}
//      imprimirDividido(arrayOriginal)

// C)
// const imprimirPares=(array)=>{
//           for (i=0;i<array.length;i++){
//               if (array[i]%2===0){
//                 console.log(array[i])
//               }
//             }}
//           imprimirPares(arrayOriginal)

// D)
// const imprimirStrings=(array)=>{
//           for (i=0;i<array.length;i++){
//               console.log(`O elemento index ${i} é: ${array[i]}`)
//             }}
//           imprimirStrings(arrayOriginal)

// E)
// let maior = 0
// let menor = 0
// const imprimirMaiorEMenor =(array)=>{
//           for (i=0;i<arrayOriginal.length;i++){
//               if(array[i]>maior){
//                 maior=array[i]
//                 menor=maior
//               }
//                 if(array[i]<menor)
//                 menor=array[i]
//             }}
//           imprimirMaiorEMenor(arrayOriginal)
//           console.log(maior,menor)




          


