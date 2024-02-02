import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1``

export const Content = styled.div`
    border: 1px solid blue;
    width: 90%;
    display: flex;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px;
`

export const Label = styled.label``

export const Input = styled.input`
    width: 10%;
    text-align: center
`

export const Button = styled.button`
    cursor: pointer
`