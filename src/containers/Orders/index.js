import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import BagOrderImg from "../../assets/bag-order-img.png";
import TrashCanImg from "../../assets/trashcan-order-img.svg";

import H1 from "../../components/Title";
import P from "../../components/Paragraph";
import Button from "../../components/Button";

import { Container, Image, ContainerItems, Order } from "./styles";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: ordersList } = await axios.get(
        "http://localhost:3001/order"
      );

      setOrders(ordersList);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)  

    const newOrders = orders.filter((order) => order.id !== orderId)

    setOrders(newOrders)
  }

  function goBackPage(){
    navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-img" src={BagOrderImg}></Image>
      <ContainerItems>
        <H1 iscloser="true">Pedidos</H1>

        <ul>
          {orders.map((order) => (
          <Order key={order.id}>
            <div>
              <P>{order.orderItems}</P>
              <P isheavy="true">{order.clientName}</P>
            </div>
            <button onClick={() => deleteOrder(order.id)}>
              <img src={TrashCanImg} alt="Trash-can"></img>
            </button>
          </Order>
          ))}
        </ul>

        <Button isback="true" onClick={goBackPage}>Voltar</Button>
      </ContainerItems>      
    </Container>
  );
};

export default Orders;
