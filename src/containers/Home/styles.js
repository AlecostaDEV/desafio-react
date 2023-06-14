import styled from "styled-components"

export const Container = styled.div`
    background-color: #0A0A10;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    margin-bottom: 25px;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;   
`
export const H1 = styled.h1`        
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    margin-bottom: 75px;
    color: #FFFFFF;    
    
`
export const InputLabel = styled.p`
    font-weight: 700;
    font-size: 18px;
    margin-left: 20px;  
    margin-bottom: 1px;  
    color: #EEEEEE;
`
export const Input = styled.input`
    outline: none;
    font-weight: 300;
    font-size: 18px;
    color: #FFFFFF;

    background: rgba(255, 255, 255, 0.25);
    border: none;
    border-radius: 14px;

    width: 342px;
    height: 58px;
    margin-bottom: 40px;
    padding-left: 20px;
`
export const Button = styled.button`
    width: 342px;
    height: 68px;

    font-weight: 900;
    font-size: 17px;
    color: #FFFFFF;

    background: #D93856;

    margin-bottom: 50px;
`