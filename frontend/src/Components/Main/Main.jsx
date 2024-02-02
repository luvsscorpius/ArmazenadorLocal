import React from "react";
import * as C from './Styles'

const Main = () => {
    return (
        <C.Main>
            <C.Title>Armazenador Local</C.Title>
                <C.Content>
                    <C.Form>
                        <C.Label for="nome">Nome</C.Label>
                        <C.Input name="nome"/>

                        <C.Label for="sobrenome">Sobrenome</C.Label>
                        <C.Input name="sobrenome"/>

                        <C.Label>Data de nascimento</C.Label>
                        <C.Input type="date"/>

                        <C.Button>Adicionar</C.Button>

                    </C.Form>
                </C.Content>    
        </C.Main>
    )
}

export default Main