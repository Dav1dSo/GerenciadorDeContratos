import styled from "styled-components";

export const Container = styled.div`
    padding-top: 100px;
    max-width: 700px;
    margin: auto;
    height: 700px;
    border-radius: 15px;

    .title{
        color: #F0F8FF;
        text-align: center;
        margin-bottom: 40px;
    }

    img {
        background: transparent;
        display: flex;
        margin: auto;
        width: 200px;
    }
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: #fff4f4;
    text-align: center;
    background: none;
    margin-bottom: 25px;
    font-size: 1.8vh;
    text-decoration: none;

    .usuario {
        margin: auto;
        width: 380px;
        margin-top: 30px;
        padding: 2vh;
        border: none;
        margin-bottom: 25px;
        border-radius: 15px;
        font-size: 20px;
    }

    .senha {
        margin: auto;;
        width: 380px;
        padding: 2vh;
        border: none;
        margin-bottom: 25px;
        border-radius: 15px;
        font-size: 19.5px;
    }

    button {
        margin: auto;
        width: 200px;
        border: none;
        padding: 2vh;
        border-radius: 40px;
        font-size: 2vh;
        color: #fff4f4;
        background-image: linear-gradient(to right, #141b52, #442cf8);
        box-shadow: 14px 10px 20px #1657f0; 
    }

    button:hover {
        box-shadow: 14px 10px 20px #442cf8;
    }
`