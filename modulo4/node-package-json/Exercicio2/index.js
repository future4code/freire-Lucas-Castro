//Exercício 3:
const operacao=process.argv[2]
const number1=Number(process.argv[3])
const number2=Number(process.argv[4])
let resposta=undefined

if (process.argv[3]===undefined||process.argv[4]===undefined){
    console.log(`\x1b[36m Digite uma operação e 2 parâmetros`)
    resposta="ERRO"
}else{


switch(operacao){
    case "add": resposta=number1 + number2
    break;
    case "sub": resposta=number1-number2
    break;
    case"mult": resposta=number1*number2
    break;
    case"div": resposta=number1/number2
    break;
    default:
        console.log("Digite add,sub,mult ou div!")
        resposta= "ERRO"
}
}
console.log(`\x1b[31m Resposta:${resposta}`)