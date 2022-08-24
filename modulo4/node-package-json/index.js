// Exercício 1:
// A) Para acessarmos os parâmetros parassados na linha de comando para o node devemos executar o comando "node index.js" ou "npm run start",
// seguidos dos parâmetros que queremos acessar.

// Exercício 2:
// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const novaIdade = idade+7

// console.log(`Olá, ${nome}! Você tem ${idade} anos! Em sete anos você terá ${novaIdade} anos!`)

//Exercício 3:
// const operacao=process.argv[2]
// const number1=Number(process.argv[3])
// const number2=Number(process.argv[4])
// let resposta=0

// switch(operacao){
//     case "add": resposta=number1 + number2
//     break;
//     case "sub": if(number1>number2){
//         resposta=number1-number2
//     }else{
//         resposta=number2-number1
//     }
//     break;
//     case"mult": resposta=number1*number2
//     break;
//     case"div":if(number1>number2){
//         resposta=number1/number2
//     }else{
//         resposta=number2/number1
//     }
//     break;
// }
// console.log(`Resposta:${resposta}`)

//Exercício 4:

// const tarefas=["cozinhar"]
// const tarefa = process.argv[2]
// const novaLista = tarefas.push(tarefa)
// console.log("Tarefa adicionada com sucesso!")
// console.log(tarefas)

