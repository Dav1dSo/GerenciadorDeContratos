import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/HomeLogin";
import Cadastro_Contrato from "../components/Cadastro_Contrato";
import Cadastro_usuario from "../components/Cadastro_Usuarios"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Cadastro_contratos" element={<Cadastro_Contrato />} />
                <Route exact path="/Cadastro_usuarios" element={<Cadastro_usuario />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;