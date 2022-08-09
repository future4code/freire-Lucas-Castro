import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const TripDetailsPage = () =>{
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token===null){
            console.log('Não está logado')
            navigate("/login")
        }

    },[])

    useEffect(()=>{

        const token = localStorage.getItem('token')

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3SujNOzNxlThkj9ERwRF',{
            headers: {
                auth:token
            }
        })
        .then((response)=>{
            console.log(response.data)

        }).catch((error)=>{
            console.log('Deu erro',error.response)
        })

    },[])

    return(
        <div>
            <h1>TripDetailsPage</h1>
        </div>
    )

}