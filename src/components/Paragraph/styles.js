import styled from 'styled-components'

export const P = styled.p`
    font-weight: ${(props) => (props.isheavy ? "700" : "300")};
    `;