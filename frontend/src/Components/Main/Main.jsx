import React, {useEffect, useState} from "react";
import * as C from './Styles'
import Grid from "../Grid/Grid";

const Main = ({setInfo, info}) => {

    const armazenar = (chave, valor) => {
            // Stringify para usar em objeto
            // Criando uma constante onde vai verificar se existe a chave se não cria um array vazio
            const pessoas = JSON.parse(localStorage.getItem(chave)) || []
            // Passa a chave e transforma em JSON, passa o array e o valor
            localStorage.setItem(chave, JSON.stringify([...pessoas, valor]))
            console.log(pessoas)
            setInfo(pessoas)
    }

    const handleAdicionar = () => {
        armazenar("pessoas", info) // O primeiro parâmetro é o nome da chave onde os dados serao armazenados e em seguida o objeto info
    }

    return (
        <>
            <C.Title>Armazenador Local</C.Title>
                <C.Content>
                    <C.Form>
                        <C.Label for="nome">Nome</C.Label>
                        <C.Input name="nome" value={(e) => e.target.value} onChange={(e) => setInfo({...info, nome: e.target.value})}/>

                        <C.Label for="sobrenome">Sobrenome</C.Label>
                        <C.Input name="sobrenome" value={(e) => e.target.value}  onChange={(e) => setInfo({...info, sobrenome: e.target.value})}/>

                        <C.Label>Data de nascimento</C.Label>
                        <C.Input type="date"value={(e) => e.target.value}  onChange={(e) => setInfo({...info, data: e.target.value})}/>

                        <C.Button type="button" onClick={handleAdicionar}>Adicionar</C.Button>

                    </C.Form>
                </C.Content> 
        </>
    )
}

export default Main