// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = +prompt(`Digite a altura:`)
  let largura = +prompt(`Digite a largura`)
  console.log(altura*largura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  let ano = +prompt('Digite o ano atual')
  let anonasc = +prompt('Digite seu ano de nascimento')
  console.log(ano-anonasc)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc= peso/(altura*altura)
  return imc
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt('Digite seu nome ')
  let idade = prompt('Digite sua idade')
  let email = prompt('Digite seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt ('Digite uma cor favorita')
  let cor2 = prompt ('Digite outra cor')
  let cor3 = prompt ('Digite outra cor')
  let cores = [cor1,cor2,cor3]
  console.log(cores)

  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let numerodeing = custo/valorIngresso
  return numerodeing

  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanhoigual = string1.length === string2.length
  return tamanhoigual

  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimoelemento = array.length-1
  return array[ultimoelemento]
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultimo= array[array.length-1]
  let primeiro= array[0]
  array[0]=ultimo
  array[array.length-1]=primeiro
  return array

  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let comp1 = string1.toLowerCase()
  let comp2 = string2.toLowerCase()
  let bol = comp1===comp2
  return bol
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoatual = +prompt('Digite o ano atual')
  let anonasc = +prompt('Digite o ano de nascimento')
  let anoemissao = +prompt('Digite o ano de emissao ')

  let menorde20 = anoatual-anonasc<=20 && anoatual-anoemissao>=5
  let entre20e50 = anoatual-anonasc>20 && anoatual-anonasc<=50 && anoatual-anoemissao>=10
  let maior50 = anoatual-anonasc>50 && anoatual-anoemissao>15

  console.log(menorde20 || entre20e50 || maior50)

  }
  
  // implemente sua lógica aqui



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let condicao1 = ano % 400 == 0
  let condicao2 = ano % 4 == 0 
  let condicao3 = ano % 100 == 0 

  return condicao2 && condicao1 == condicao3
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt('Voce tem mais de 18 anos?')
  let ensino = prompt('Voce tem ensino médio completo?')
  let disp = prompt('Voce tem disponibilidade de horário?')
  let bol = idade == "sim" && ensino=="sim" && disp=="sim"
  console.log(bol)
  // implemente sua lógica aqui

}