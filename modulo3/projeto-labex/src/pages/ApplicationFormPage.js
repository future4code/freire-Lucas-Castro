import React,{useState} from "react";
import axios from "axios";

export const ApplicationFormPage = () =>{
    const [nome,setNome] = useState("")
    const [idade,setIdade] = useState("")
    const [texto,setTexto] = useState("")
    const [profissao,setProfissao] = useState("")
    
    const mudaNome = (event) => {
        setNome(event.target.value)
    }

    const mudaIdade = (event) =>{
        setIdade(event.target.value)
    }

    const mudaTexto = (event) =>{
        setTexto(event.target.value)
    }

    const mudaProfissao = (event) => {
        setProfissao(event.target.value)
    }

    const formularioCandidato = (event) =>{
        event.preventDefault()
    }

    return(
        <div>
            <h1>Formulário de cadastro</h1>
            <form onSubmit={formularioCandidato}>
            <input value={nome} onChange={mudaNome} placeholder={"Nome"}/>
            <input type="number" value={idade} onChange={mudaIdade} placeholder={"Idade"}/>
            <input value={texto} onChange={mudaTexto} placeholder={"Texto de candidatura"}/>
            <input value={profissao} onChange={mudaProfissao} placeholder={"Profissão"}/>
            <button >Enviar candidatura</button>
            </form>

        </div>
    )

}