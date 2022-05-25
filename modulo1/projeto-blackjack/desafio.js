/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    function comprarCarta() {
      // Cria array de cartas
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
      // Cria array de naipes
      const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
      // Sorteia uma carta
      const numero = cartas[Math.floor(Math.random() * 13)]
    
      // Sorteia um naipe
      const naipe = naipes[Math.floor(Math.random() * 4)]
    
      let valor
    
      // Verifica se é uma das letras e coloca o valor correspondente na variável valor
      if (numero === "A") {
        valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
      } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
      }
    
      // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
    
      return carta
    }
    
  
console.log("Boas vindas ao jogo de Blackjack!")

let usuarioCarta1 = comprarCarta()
let usuarioCarta2 = comprarCarta()
let computadorCarta1 = comprarCarta()
let computadorCarta2 = comprarCarta()

 if(confirm("Quer iniciar uma nova rodada?")){
    while(((usuarioCarta1==="A")&&(usuarioCarta2==="A")) ||((computadorCarta1==="A")&&(computadorCarta2==="A"))){
      usuarioCarta1 = comprarCarta()
      usuarioCarta2 = comprarCarta()
      computadorCarta1 = comprarCarta()
      computadorCarta2 = comprarCarta()
    }
confirm(`Suas cartas são ${usuarioCarta1.texto+ usuarioCarta2.texto}. A carta revelada do computador é: ${computadorCarta1.texto}.
\n
Deseja comprar mais uma carta?`)

}else{
   console.log("Muito obrigado! O jogo acabou!")
}

let pontosUsuario = usuarioCarta1.valor+usuarioCarta2.valor
let pontosComputador = computadorCarta1.valor+ computadorCarta2.valor

if(pontosUsuario>pontosComputador){
   console.log("O usuário ganhou!")
}else if(pontosUsuario<pontosComputador){
   console.log("O computador ganhou!")
}else{
   console.log("Empate!")
}






