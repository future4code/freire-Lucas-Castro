import express from "express"
import cors from "cors"
import {users} from "./users"

const app=express()
app.use(express.json())
app.use(cors())

export type usersType={
    id: String | Number,
    name: String,
    phone: Number | String,
    email: String,
    website: String,
    posts: posts[]
}

type posts = {
    id:Number,
    title: String,
    body:String,
    userId: String
}

app.get("/", (req,res)=>{
    res.send("Hello from Express")
})

app.get("/users",(req,res)=>{
    const showUsers = users.map((user)=>{
        return user
    })
    res.send(showUsers)
})

app.get("/users/posts",(req,res)=>{
    const showPosts = users.map((posts)=>{

        return posts.posts
    })
    res.send(showPosts)
})

app.get('/post/:userId', (req, res) => {

    const userId = req.params.userId

    const userPost = users.map((user) => {
        return user.id === userId
    })

    res.send(userPost)
})



app.listen (3003,()=>{
    console.log("Server rodando na porta 3003")
})