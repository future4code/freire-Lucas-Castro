import React from "react";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import {AddRecipesPage}  from "../pages/AddRecipesPage/AddRecipesPage";
import {LoginPage}  from "../pages/LoginPage/LoginPage";
import {RecipesDetailPage}  from "../pages/RecipesDetailPage/RecipesDetailPage";
import {RecipesListPage}  from "../pages/RecipesListPage/RecipesListPage";
import {SignUpPage}  from "../pages/SignUpPage/SignUpPage";
import {Header} from "../components/Header/Header"


export const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<SignUpPage/>}/>
            <Route index element={<RecipesListPage/>}/>
            <Route path="/adicionar-receita" element={<AddRecipesPage/>}/>
            <Route path="/detalhes/:id" element={<RecipesDetailPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            

        
        </Routes>

        </BrowserRouter>
    )
}