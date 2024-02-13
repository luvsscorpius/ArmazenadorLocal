import React, {useState} from "react";
import * as C from './Styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({setInfo, info}) => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [data, setData] = useState('')

    const armazenar = () => {
            // Stringify para usar em objeto
            // Criando uma constante onde vai verificar se existe a chave se não cria um array vazio
            // const pessoas = JSON.parse(localStorage.getItem(chave)) || []
            // // Passa a chave e transforma em JSON, passa o array e o valor
            // localStorage.setItem(chave, JSON.stringify([...pessoas, valor]))
            // console.log(pessoas)
            // setInfo(pessoas)

            if ((nome === '') || (sobrenome === '') || (data === '')) {
                toast.warning('Insira todas as informações.')
            } else {
                // Cria um novo objeto com as informações do states para adicionar ao state principal (simulando um banco de dados.)
                const novoObjeto = {
                    id: info.length + 1,
                    nome: nome, 
                    sobrenome: sobrenome,
                    data: data
                }
                
                // Verifica se info é um array antes de adicionar o novo objeto
                if (Array.isArray(info)) {
                    // Atualiza o estado com um novo array que inclui o novo objeto
                    setInfo([...info, novoObjeto])
                } else {
                    // Se info nao for um array, cria um novo array com o novo objeto
                    setInfo([novoObjeto])
                }

                toast.success('Informações adicionadas com sucesso.')
            }

            // Limpando os inputs depois de adicionar uma nova pessoa
            document.getElementById('nome').value = ''
            document.getElementById('sobrenome').value = ''
            setData('')
    }

    return (
        <>
            <C.Title>Armazenador Local</C.Title>
                <C.Content>
                    <C.Form>
                        <C.Label htmlFor="nome">Nome</C.Label>
                        <C.Input name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <C.Label htmlFor="sobrenome">Sobrenome</C.Label>
                        <C.Input name="sobrenome" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />

                        <C.Label>Data de nascimento</C.Label>
                        <C.Input type="date" value={data} onChange={(e) => setData(e.target.value) } />

                        <C.Button type="button" onClick={armazenar}>Adicionar</C.Button>

                    </C.Form>
                </C.Content> 
                <ToastContainer/>
        </>
    )
}

export default Main