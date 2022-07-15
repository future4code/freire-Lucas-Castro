import React from "react";
import {useNavigate} from "react-router-dom";

export const HomePage = () =>{
    const navigate = useNavigate()

    const goToListTripsPage = () =>{
        navigate("/trips/list")
    }

    const goToLoginPage = () =>{
        navigate("/login")
    }

    

    return(
        <div>
            <h1>HomePage</h1>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
            <button onClick={goToLoginPage}>Área de Admin</button>
        </div>
    )

}