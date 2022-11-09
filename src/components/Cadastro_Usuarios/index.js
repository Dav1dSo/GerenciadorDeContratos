import React from "react";
import { Container, Form } from "./style";

// logica -- 

const insert_user = () => {
     

};

const Cadastro_Usuarios = () => {
    return (
        <Container>
            <h1 className="title">Cadastrar Usuário</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/2666/2666523.png" alt='#' />
            <Form>
                <input className='usuario' placeholder="Usuario:" type="text" name="usuario"  />
                <input className='senha' placeholder="Senha:" type="senha" name="senha"  />

                <button onClick={() => { insert_user() }} type="submit">Cadastrar </button>
            </Form>
        </Container>
    )
};




export default Cadastro_Usuarios;