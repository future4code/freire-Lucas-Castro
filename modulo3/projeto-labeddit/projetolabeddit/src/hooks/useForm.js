import { useState } from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)



    const inputChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    const reset = () => {
        setForm(initialState)
    }

    return [form, inputChange, reset]

}