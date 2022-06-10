import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Post = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 100px;
  
`

class App extends React.Component {
  state = {
    posts:[
      {
          nomeUsuario:'paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
      },
      {
          nomeUsuario:'leticia',
          fotoUsuario:'https://picsum.photos/50/49',
           fotoPost:'https://picsum.photos/200/149'
      },
        {
          nomeUsuario:'gabriel',
          fotoUsuario:'https://picsum.photos/50/48',
          fotoPost:'https://picsum.photos/200/148'
        }
    ],
    }

    adicionarPost = () => {
      let novoPost= {
        nomeUsuario: this.state.nomeUsuario,
        fotoUsuario:this.state.fotoUsuario,
        fotoPost: this.state.fotoPost
      }
      let copiaListaDePost = [...this.state.posts, novoPost]
      this.setState({post:copiaListaDePost})
    }
    onChangeInputNomeUsuario = (nome)=>{
      this.setState({nomeUsuario: nome.target.value})
    }
    onChangeInputFotoUsuario = (foto)=>{
      this.setState({nomeUsuario: foto.target.value})
    }
    onChangeInputFotoPost = (post)=>{
      this.setState({nomeUsuario: post.target.value})
    }

    render() {
      let listaDePosts = this.state.posts.map((posts)=>{
        return (
          <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}/>
        )
      })

    }

    



  }
export default App;
