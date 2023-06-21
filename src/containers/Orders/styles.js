import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  margin-bottom: 30px;
`;
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Order = styled.li`
  display: flex;
  justify-content: space-between;

  width: 342px;
  height: 101px;
  overflow: auto;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 18px;
    color: #ffffff;
    padding-left: 20px;
    padding-right: 20px;    
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding-right: 20px;    

    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;
