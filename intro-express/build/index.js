"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./users");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello from Express");
});
app.get("/users", (req, res) => {
    const showUsers = users_1.users.map((user) => {
        return user;
    });
    res.send(showUsers);
});
app.get("/users/posts", (req, res) => {
    const showPosts = users_1.users.map((posts) => {
        return posts.posts;
    });
    res.send(showPosts);
});
app.get('/post/:userId', (req, res) => {
    const userId = req.params.userId;
    const userPost = users_1.users.map((user) => {
        return user.id === userId;
    });
    res.send(userPost);
});
app.listen(3003, () => {
    console.log("Server rodando na porta 3003");
});
