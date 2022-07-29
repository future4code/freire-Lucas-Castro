import React from "react";
import { ScreenContainer, LogoImage, InputsContainer, ButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const sendForm = (event) => {
        event.preventDefault()
    }
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={sendForm}>

                    <TextField
                        name={"email"}
                        label="Email"
                        variant="outlined"
                        value={form.email}
                        onChange={onChange}
                        required
                        type={"email"}
                        fullWidth
                    />
                    
                    <TextField
                        name={"password"}
                        label="Password"
                        variant="outlined"
                        value={form.password}
                        onChange={onChange}
                        required
                        margin={"normal"}
                        type={"password"}
                        fullWidth
                    />
                    <ButtonContainer>
                <Button
                    variant="contained"
                    color="primary"
                    type={"submit"}
                    fullWidth
                    margin={"normal"}
                >Fazer login</Button>
                <Button
                    variant="contained" color="primary"
                    type={"submit"}
                    fullWidth

                >Cadastre-se aqui!</Button>

            </ButtonContainer>


                </form>
            </InputsContainer>
            
        </ScreenContainer>
    )
}