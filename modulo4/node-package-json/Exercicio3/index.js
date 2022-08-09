//Exercício 4:
const fs = require('fs');

if (process.argv[2] !== undefined) {

    fs.appendFile("tarefas.txt", `${process.argv[2]}\n`, (err) => {
        if (err) throw err;
        console.log("\x1b[33m Tarefa adicionada com sucesso!")

        fs.readFile('tarefas.txt', function (err, data) {
            if (err) throw err;
            console.log(`\x1b[31m Lista de tarefas:
${data}`);
        }
        )
    })
} else {
    console.log("\x1b[36m Erro mané! Digite uma tarefa como parâmetro! ")
}


// const tarefas=["cozinhar"]
// const tarefa = process.argv[2]
// const novaLista = tarefas.push(tarefa)
// console.log("\x1b[31m Tarefa adicionada com sucesso!")
// console.log(tarefas)
