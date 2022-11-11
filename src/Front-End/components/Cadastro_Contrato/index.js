import { useState } from "react";
import { Container } from "./style";
import { Form } from "./style"

//componente
const Contrato = () => {

    //logica

    const [valor, setValor] = useState('');
    const [data, setData] = useState('');

    const setForm_Cadastro_Contrato = () => {
        alert(`${valor}, ${data}`)
    }

    return (
        <Container>
            <h1 className="title">Cadastrar contrato</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/2666/2666523.png" alt='#' />
            <Form>
                <input className='valor' placeholder="Valor R$:" type="number" name="valor" onChange={(e) => setValor(e.target.value)} />
                <input className='data' placeholder="Data:" type="date" name="data" onChange={(e) => setData(e.target.value)} />

                <button onClick={() => setForm_Cadastro_Contrato()} type="submit">Cadastrar </button>
            </Form>
        </Container>
    )
};

export default Contrato;