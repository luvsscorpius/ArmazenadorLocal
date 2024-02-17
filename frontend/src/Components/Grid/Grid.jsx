import React, {useState, useEffect} from "react";
import * as G from './Styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import ReactPaginate from 'react-paginate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from 'clsx';

const Grid = ({info, setInfo}) => {
    // Paginação da tabela
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(2) 

    useEffect(() => {
        const updateItemsPerPage = () => {
            // Definindo alturas especificas
            const breakpoints = {
                small: 480, // Exemplo: altura de tela para dispositivos pequenos
                medium: 768, // Exemplo: altura de tela para dispositivos médios
                large: 932,
            };

            // Determinando a altura atual da tela
            const screenHeight = window.innerHeight;

            // Determinando o número de itens por página com base na altura da tela
            let itemsPerPage = 2; // Valor padrão
            if (screenHeight < breakpoints.medium) {
                itemsPerPage = 2; // Por exemplo, exibe 1 item por página em dispositivos pequenos
            } else if (breakpoints.large) {
                itemsPerPage = 6; // Por exemplo, exibe 2 itens por página em dispositivos médios ou maiores
            } else {
                itemsPerPage = 10
            }

            // Atualize o estado com o novo número de itens por página
            setItemsPerPage(itemsPerPage);
        };

        // Execute a função de atualização ao montar o componente e ao redimensionar a tela
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);

        // Remova o listener de evento ao desmontar o componente para evitar vazamentos de memória
        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);


    // Essa função é usada para quando o usuário clica em um botão da paginação
    const handlePageClick = ({selected}) => {
        // Utilizamos o setCurrentPage para atualizarmos o estado da páginação
        setCurrentPage(selected)
    }

    // O offset é um indice que aponta para o primeiro elemento que deve ser exibido na página atual. Ele é calculado multiplicando o número da página atual pelo numero de itens da página por exemplo na primeira pagina so teram 10 itens e a próxima página começara pelo item 11.
    const offset = currentPage * itemsPerPage;
    //currentPageData é um novo array que contém os dados a serem exibidos na página atual.
    const currentPageData = info.slice(offset, offset + itemsPerPage)

    // Função para deletar alguma informação
    const handleDelete = (linhaIndex) => {
        // Criando uma nova tabela 
        const novaTabela = [...info]

        // Removendo a célula que foi clicada
        // Pego a nova tabela que foi criada e uso o método splice com dois parametros, primeiro seria o index da linha que você quer apagar e depois o 1 que seria a quantidade que será apagada.
        novaTabela.splice(linhaIndex, 1)

        toast.error('Informações deletadas com sucesso.')

        // Atualizando a table
        setInfo(novaTabela)

    }

    return (
        <G.GridContainer>
            <G.Table>
                <G.Thead>
                    <G.Tr>
                        <G.Th className="id-column">Id</G.Th> 
                        <G.Th>Nome</G.Th> 
                        <G.Th>Sobrenome</G.Th> 
                        <G.Th>Data de nascimento</G.Th> 
                        <G.Th>Ações</G.Th> 
                    </G.Tr>
                </G.Thead>

                <G.Tbody>

                    {info.length > 0 && currentPageData.map((inf, linhaIndex) => (
                        <G.Tr key={linhaIndex}>
                            <G.Td key={inf.id} className="id-column">{inf.id}</G.Td>
                            <G.Td>{inf.nome}</G.Td>
                            <G.Td>{inf.sobrenome}</G.Td>
                            <G.Td>{inf.data}</G.Td>
                            <G.Td><G.StyledIcon icon={faTrash} onClick={( ) => handleDelete(linhaIndex)} /></G.Td> 
                        </G.Tr>
                    ))}

                </G.Tbody>
            </G.Table>


            <G.StyledPagination
                pageCount={Math.ceil(info.length / itemsPerPage)}
                pageRangeDisplayed={5} // Número de páginas a serem exibidas
                marginPagesDisplayed={2} // Número de páginas a serem exibidas nas extremidades
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                nextLinkClassName={"next"}
                previousLinkClassName={"previous"}
                pageClassName={"page"}/>

            <ToastContainer/>
        </G.GridContainer>
    )
}

export default Grid