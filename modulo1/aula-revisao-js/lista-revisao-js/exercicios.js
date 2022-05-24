// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length  
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  }

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=>a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
     let arrayPares = array.filter((pares)=>{
        if (pares%2===0){
            return true
        }})
    return arrayPares
    }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = array.filter((pares)=>{
        if (pares%2===0){
            return true
    }})
    let arrayAoQuadrado = arrayPares.map((pares)=>{
        return pares**2
    })
    return arrayAoQuadrado}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    array.sort((a,b)=>b-a)
    return array[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.abs(num1 - num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = []
   for (let i=0;i<n;i++){
       arrayPares.push(i*2)
    }return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA===ladoB && ladoC===ladoA){
        return "Equilátero"
    } else if (ladoA===ladoB || ladoC===ladoB || ladoC===ladoA){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = array.sort((a,b)=>b-a)
    let segundoMaior = array[1]
    let arrayInvertido = array.sort((a,b)=>a-b)
    let segundoMenor = array[1]
    return [segundoMaior,segundoMenor]
} 

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
      }


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimo = {...pessoa}
    anonimo.nome = "ANÔNIMO"
return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasPermitidas = pessoas.filter((permitidas)=>{
       return permitidas.idade>14 && permitidas.altura>=1.5 && permitidas.idade<60
   })
return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas){
        let pessoasNaoPermitidas = pessoas.filter((proibidas)=>{
            return!(proibidas.idade>14 && proibidas.altura>=1.5 && proibidas.idade<60)
        })
     return pessoasNaoPermitidas
    }
  

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.map(conta => conta.compras = conta.compras.reduce((a, b) => a + b, 0))
    contas.map(conta => conta.saldoTotal = conta.saldoTotal - conta.compras)
    contas.map(conta => conta.compras = [])  
    return contas
  }
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}