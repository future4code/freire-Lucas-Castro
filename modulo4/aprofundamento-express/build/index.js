"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Exercício 1
// Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.
app.get("/ping", (req, res) => {
    res.send("Pong!!");
});
// Exercício 2
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam [afazeres](https://jsonplaceholder.typicode.com/todos) (”*to dos”*). Crie uma variável de tipo para representar cada afazer.
// type toDoList= {
//     userId: Number,
//     id: Number,
//     title: String,
//     completed: Boolean | String
// }
//Exercício 3
//Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.
// R: Array localizado no arquivo data.ts
//Exercício 4
//Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.
//Retorna afazeres completos ou incompletos, de acordo com o valor true/false atribuido a "completed" no postman.
app.get("/todo/:status", (req, res) => {
    const toDoStatus = req.params.status;
    const incompleteList = data_1.toDoList.filter((completed) => {
        if (String(completed.completed) === toDoStatus) {
            return completed;
        }
    });
    res.send(incompleteList);
});
//Exercício 5
//Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.
app.post("/create", (req, res) => {
    const { userId, id, title, completed } = req.body;
    data_1.toDoList.push({ userId, id, title, completed });
    res.send(data_1.toDoList);
});
app.listen(3002, () => {
    console.log("Port 3002:Online");
});
