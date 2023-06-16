import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import BurgerHomeImg from "../../assets/burger-home-img.svg";

import H1 from "../../components/Title";
import InputLabel from "../../components/InputLabel";
//import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Image, ContainerItens, Input } from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {      
      orderItems: inputOrder.current.value,
      clientName: inputName.current.value,
    });

    setOrders([...orders, newOrder]);

    navigate("/pedidos");
  }

  return (
    <Container>
      <Image alt="logo-img" src={BurgerHomeImg} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="seu pedido" ref={inputOrder} />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="seu nome" ref={inputName} />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
