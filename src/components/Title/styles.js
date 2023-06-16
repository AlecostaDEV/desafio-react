import styled from 'styled-components'

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin-bottom: ${(props) => (props.iscloser ? "45px" : "75px")};  
  color: #ffffff; 
`;