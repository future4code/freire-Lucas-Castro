import express from "express"
import cors from "cors"
import { toDoList } from "./data"
import { toDoListType } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
// Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (req, res) => {
    res.send("Pong!!")
})

// Exercício 2
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam [afazeres](https://jsonplaceholder.typicode.com/todos) (”*to dos”*). Crie uma variável de tipo para representar cada afazer.

// R:Tipagem feita no arquivo data.ts

//Exercício 3
//Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.
// R: Array localizado no arquivo data.ts

//Exercício 4

//Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

//Retorna afazeres completos ou incompletos, de acordo com o valor true/false atribuido a "completed" no postman.

app.get("/todo/:status", (req, res) => {
    const toDoStatus = req.params.status

    const completedList = toDoList.filter((completed) => {
        if (String(completed.completed) === toDoStatus) {
            return completed
        }
    })
    res.send(completedList)
})

//Exercício 5
//Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.

app.post("/create", (req, res) => {
    const { userId, id, title, completed }: toDoListType = req.body

    toDoList.push({ userId, id, title, completed })

    res.send(toDoList)
})

//Exercício 6
//Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.

app.put("/muda-status/:id", (req, res) => {
    const idofToDo = Number(req.params.id);

    const changeStatus = toDoList.filter((todo) => {
        if (todo.id === idofToDo) {
            todo.completed = !todo.completed
            return todo
        }
    })

    res.send(changeStatus)
});










app.listen(3002, () => {
    console.log("Port 3002:Online")
})