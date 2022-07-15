import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    };

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(email, password);
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login',body)
            .then((response) => {
                console.log('Deu certo',response.data.token)
                localStorage.setItem('token',response.data.token)
                navigate("/admin/trips")
            }).catch((error) => {
                console.log('Deu errado',error.response)
            })

    };

    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={onSubmitLogin}>
            <input
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
                required
            />
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                pattern={"^.{3,}"}
                title={"Sua senha deve ter no mínimo 3 caracteres!"}
                required
            />
            <button>Enviar</button>
            </form>
        </div>
    )

}