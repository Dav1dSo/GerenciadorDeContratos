import { Container } from "./style";
import { Form } from "./style"

const Contrato = () => {
    return (
        <Container>
            <h1 className="title">Cadastrar contrato</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/2666/2666523.png" alt='#' />
            <Form>
                <input className='valor' placeholder="Valor R$:" type="number" name="valor"  />
                <input className='data' placeholder="Data:" type="date" name="data"  />

                <button type="submit">Cadastrar </button>
            </Form>
        </Container>
    )
};

export default Contrato;