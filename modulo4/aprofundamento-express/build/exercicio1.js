"use strict";
// import express from 'express'
// import cors from 'cors'
// import {users} from './data'
// import { StringLiteralType } from 'typescript';
// console.log(" Exercicio 1")
// // A partir do template fornecido, vamos reproduzir a API do Labefy!
// // Começaremos, na aula de hoje, por quatro endpoints:
// // Get All Playlists OK 
// // Get Playlist Tracks ok
// // Delete Playlist ok 
// // Delete Track ok 
// const app = express();
// app.use(express.json());
// app.use(cors())
// // Get All Playlists 
// app.get('/playlists',(req,res)=>{
//     const playlists: object[] = users.map( user=>{
//             return user.playlists
//     })
//     const arrayFlat = playlists.flat(1)
//     res.status(200).send(arrayFlat)
//     //console.table(playlists.flat(1))
//     // [ 1, [1,2], 3, [4,6,7,8]] flat ---> [1,1,2,3,4,6,7,8]
// })
// // Get Playlist Tracks 
// app.get('/tracks', (req,res)=>{
//     const playlists = users.map(user=>{
//         return user.playlists
//     }).flat(1)
//     const tracks = playlists.map(playlist=>{
//         return playlist.tracks
//     }).flat(1)
//     res.send(tracks)
// })
// // Delete Playlist
// app.delete('/playlists/:playlistId', (req,res)=>{
//     const listaAtulizada = users.map(user =>{
//         if(user.id === req.params.playlistId){
//             return {...user,playlists:[]}  
//         }else{
//             return user
//         }
//     })
//     res.status(200).send(listaAtulizada)
// })
// // Delete Track ok 
// app.delete('/playlists/:playlistId/tracks/:trackId', (req,res)=>{
//     const trackId = req.params.trackId
//     const playlistId = req.params.playlistId
//     const listaUsers = users 
//    // listaUsers -> playlists ( tem essa id? ) -> tracks (tem essa track? ) - deletar a track
//     for (let user of listaUsers){
//         for (let playlist of user.playlists){
//             if(playlist.id === playlistId){
//                 playlist.tracks.forEach( track =>{
//                     if(track.id === trackId){
//                     const index = playlist.tracks.indexOf(track)
//                     playlist.tracks.splice(index)
//                     }
//                 })
//             }
//         }
//     }
//     res.status(200).send(listaUsers.flat(1))
// })
// //Search playlist
// app.get("/searchPlaylist",(req,res)=>{
//     const authorization = req.headers.authorization
//     const namePlaylist = req.query.name as String
//     if(!namePlaylist){
//         res.send("Digite o nome da playlist")
//     }else{
//         const searchUser = users.filter(user=>{
//             return user.id === authorization
//         })
//         const playlistUser = searchUser[0].playlists.filter (playlist=>{
//             return namePlaylist === playlist.name.toLowerCase()
//         })
//         const playlistMap = playlistUser.map(playlist=>{
//             return {
//                 id: playlist.id,
//                 name:playlist.name
//             }
//         })
//         type result = {
//             quantity: Number,
//             list: object[]
//         }
//         const resultToPostman:result = {
//             quantity:playlistMap.length,
//             list:playlistMap
//         }
//         res.send({resultToPostman})
//     }
// })
// //Create playlist
// app.post("/playlist", (req,res)=>{
//     const authorization = req.headers.authorization
//     const newName = req.body.name
//     const newPlaylist = {
//         id:Date.now().toString(),
//         name:newName,
//         track:[]
//     }
//     const newList = users
//     for(let user of newList ){
//         if(user.id === authorization){
//             user.playlists.push(newPlaylist)
//         }
//     }
//     res.send({authorization,newList})
// })
// //Add Track to Playlist
// app.post("/playlist/:playlistId/tracks",(req,res)=>{
//     const authorization = req.headers.
// })
// app.listen(3002, ()=>{
//     console.log("Servidor rodanndo na porta 3002 - Exercício 1 [localhost:3002]")
// })
