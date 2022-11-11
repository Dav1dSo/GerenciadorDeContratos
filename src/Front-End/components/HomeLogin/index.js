import React, { useState } from 'react';
import {Container, Form} from './style'

// Logica--



const HomeLogin = () => {

    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    const setForm_Login = () => {
        alert('teste')
    }

    return (
        <Container>
            <h1 className='title'>Login</h1>
            <img src="https://cdn.goquadros.com.br/img/art_site/home/221005/user.webp" alt='#' />
            <Form>
                <input className='user' placeholder="Login:" type="text" name="login"  onChange={(e) => setUser(e.target.value)}/>
                <input className='senha' placeholder="Senha:" type="password" name="senha" onChange={(e) => setSenha(e.target.value)} />
                <a href="#">Esqueceu sua senha?</a>
                <a href="#">Cadastre-se</a>
                <button onClick={() => setForm_Login()} type="submit">Continuar</button>
            </Form>
        </Container>
    )
};

export default HomeLogin;