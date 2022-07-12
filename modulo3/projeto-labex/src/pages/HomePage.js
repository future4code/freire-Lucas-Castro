import React from "react";
import {useNavigate} from "react-router-dom";

export const HomePage = () =>{
    const navigate = useNavigate()

    const goToListTripsPage = () =>{
        navigate("/trips/list")
    }

    const goToAdminHomePage = () =>{
        navigate("/admin/trips/list")
    }

    

    return(
        <div>
            <h1>HomePage</h1>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
            <button onClick={goToAdminHomePage}>Área de Admin</button>
        </div>
    )

}