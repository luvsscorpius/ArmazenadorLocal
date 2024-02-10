import React, {useEffect, useState} from "react";
import * as C from './Styles'

const Main = ({setInfo, info}) => {

    const [data, setData] = useState('')

    const armazenar = () => {
            // Stringify para usar em objeto
            // Criando uma constante onde vai verificar se existe a chave se não cria um array vazio
            // const pessoas = JSON.parse(localStorage.getItem(chave)) || []
            // // Passa a chave e transforma em JSON, passa o array e o valor
            // localStorage.setItem(chave, JSON.stringify([...pessoas, valor]))
            // console.log(pessoas)
            // setInfo(pessoas)
            
            console.log('Adicionei')
            console.log('Nome:', info.nome, 'Sobrenome: ', info.sobrenome, 'Data: ', data)

            const novoObjeto = {
                nome: info.nome, 
                sobrenome: info.sobrenome,
                data: data
            }
    
            console.log("Novo objeto: ", novoObjeto)
           
            const novaInfo = Array.isArray(info) ? [...info, novoObjeto] : [novoObjeto]
            setInfo(novaInfo)

            setData('')

            console.log(info)
    }

    const handleChange = (e) => {
        console.log('teste')
    }

    return (
        <>
            <C.Title>Armazenador Local</C.Title>
                <C.Content>
                    <C.Form>
                        <C.Label htmlFor="nome">Nome</C.Label>
                        <C.Input name="nome" id="nome" value={info.nome} onChange={(e) => {setInfo({...info, nome: e.target.value}); handleChange()}} />

                        <C.Label htmlFor="sobrenome">Sobrenome</C.Label>
                        <C.Input name="sobrenome" id="sobrenome" value={info.sobrenome} onChange={(e) => {setInfo({...info, sobrenome: e.target.value}); handleChange()}} />

                        <C.Label>Data de nascimento</C.Label>
                        <C.Input type="date" value={data} onChange={(e) => {setInfo({...info, data: e.target.value}); setData(e.target.value); handleChange()}} />

                        <C.Button type="button" onClick={armazenar}>Adicionar</C.Button>

                    </C.Form>
                </C.Content> 
        </>
    )
}

export default Main