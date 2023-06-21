import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;

  font-weight: 900;
  font-size: 17px;
  color: #ffffff;
  border: none;

  background: ${(props) =>
    props.isback ? "rgba(255, 255, 255, 0.14)" : "#d93856"};

  margin-bottom: 50px;

  margin-top: ${(props) =>
    props.isback ? "80px" : ""};

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
