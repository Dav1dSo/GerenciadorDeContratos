import React, { useState } from "react";
import { Container, Form } from "./style";

//componente--

const Cadastro_Usuarios = () => {

    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    const setForm_Cadastro_User = () => {
        alert('teste')
    }

    return (
        <Container>
            <h1 className="title">Cadastrar Usuário</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/2666/2666523.png" alt='#' />
            <Form>
                <input className='usuario' placeholder="Usuario:" type="text" name="usuario" onChange={(e) => setUser(e.target.value)} />
                <input className='senha' placeholder="Senha:" type="senha" name="senha" onChange={(e) => setSenha(e.target.value)}/>

                <button onClick={() => setForm_Cadastro_User()} type="submit">Cadastrar </button>
            </Form>
        </Container>
    )
};




export default Cadastro_Usuarios;