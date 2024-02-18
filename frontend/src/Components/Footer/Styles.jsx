import styled from "styled-components";

export const Box = styled.div`
    padding: 2% 2.5%;
    background: #167F92;
    position: absolute;
    bottom: 0;
    width: 100%;

    @media (max-width: 768px) {
        padding: 5% 2.5%;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const h3 = styled.h3`
`

export const a = styled.a`
    color: #fff;
    text-decoration: none;
`