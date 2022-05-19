//Exercícios de interpretação:
//1.A)Será impresso no console um novo array com os 3 itens,seus índices e um array usuários(para cada item).
//2.A)Será impresso no console um novo array somente com os 3 nomes.
//3.A)Será impresso um array com os apelidos Mandi e Laura.

// Exercício 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//A)
//const listaNomes = pets.map((pet)=>{
//      return pet.nome
//  })
//  console.log(listaNomes)

//B)
//  const listaSalsichas = pets.filter((pet)=>{
//      return pet.raca==="Salsicha"
//  })
//  console.log(ListaSalsichas)

//C)
//   const listaPoodles = pets.filter((poodles)=>{
//      return poodles.raca==="Poodle"
// })
// const listaMensagem = listaPoodles.map((poodles)=>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}`
// })
// console.log(listaMensagem)

// Exercício 2:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

//A)
// const listaDeNomes = produtos.map((nomes)=>{
//     return nomes.nome
// })
// console.log(listaDeNomes)

//B)
// const listaDeDesconto = produtos.map((nomes)=>{
//     return `${nomes.nome}, ${nomes.preco*0.95}`
// })
// console.log(listaDeDesconto)

//C)
// const listaDeBebidas = produtos.filter((nomes)=>{
//     return nomes.categoria==="Bebidas"
// })
// console.log(listaDeBebidas)

//D)
// const listaYpe = produtos.filter((nomes)=>{
//     return nomes.nome.includes("Ypê")
// })
// console.log(listaYpe)

//E)
// const listaYpe = produtos.filter((nomes)=>{
//     return nomes.nome.includes("Ypê")
// })
// const listaYpePrecos = listaYpe.map((nomes)=>{
//     return `Compre${nomes.nome} por ${nomes.preco}`
// })
// console.log(listaYpePrecos)





