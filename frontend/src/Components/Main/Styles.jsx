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
    background-color: #070F2B;
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
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Input = styled.input`
    width: 15%;
    height: 25px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: 0;
`

export const Button = styled.button`
    cursor: pointer;
    background-color: #535C91;
    color: #eee;
    width: 90px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 1px #535C91;
`