import React from 'react';
import {Container, Form} from './style'

const HomeLogin = () => {
    return (
        <Container>
            <h1 className='title'>Login</h1>
            <img src="https://cdn.goquadros.com.br/img/art_site/home/221005/user.webp" alt='#' />
            <Form>
                <input className='user' placeholder="Login:" type="text" name="login"  />
                <input className='senha' placeholder="Senha:" type="password" name="senha"  />
                <a href="#">Esqueceu sua senha?</a>
                <a href="#">Cadastre-se</a>
                <button type="submit">Continuar</button>
            </Form>
        </Container>
    )
};

export default HomeLogin;