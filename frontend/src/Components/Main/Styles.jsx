import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// Resetar css no styled-components
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Title = styled.h1`
    text-align: center;
    background-color: #167F92;
    color: #fff;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px;
`

export const Content = styled.div`
    width: 95%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #ddd;

    @media (max-width: 768px) {
        align-items: center;
        height: 50%;
        width: 93%;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 10px;
    gap: 10px;

    @media (max-width: 768px) {
        width: 80%;
        flex-direction: column;
        gap: 3px;
    }
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start
    }
`

export const Input = styled.input`
    width: 15%;
    height: 25px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: 0;
    margin: auto 0;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

`

export const Button = styled.button`
    cursor: pointer;
    background-color: #167F92;
    color: #eee;
    width: 100px;
    border-radius: 5px;
    border: 0;
    height: 30px;
    margin: auto 0;

    @media (max-width: 768px) {
        margin: 10px;
    }
`