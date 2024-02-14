import React, {useState} from "react";
import * as G from './Styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import ReactPaginate from 'react-paginate'

const Grid = ({info}) => {
    // Paginação da tabela
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 10

    // Essa função é usada para quando o usuário clica em um botão da paginação
    const handlePageClick = ({selected}) => {
        // Utilizamos o setCurrentPage para atualizarmos o estado da páginação
        setCurrentPage(selected)
    }

    // O offset é um indice que aponta para o primeiro elemento que deve ser exibido na página atual. Ele é calculado multiplicando o número da página atual pelo numero de itens da página por exemplo na primeira pagina so teram 10 itens e a próxima página começara pelo item 11.
    const offset = currentPage * itemsPerPage;
    //currentPageData é um novo array que contém os dados a serem exibidos na página atual.
    const currentPageData = info.slice(offset, offset + itemsPerPage)

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

                    {info.length > 0 && currentPageData.map(inf => (
                        <G.Tr>
                            <G.Td className="id-column">{inf.id}</G.Td>
                            <G.Td>{inf.nome}</G.Td>
                            <G.Td>{inf.sobrenome}</G.Td>
                            <G.Td>{inf.data}</G.Td>
                            <G.Td><FontAwesomeIcon icon={faTrash}/></G.Td> 
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
        </G.GridContainer>
    )
}

export default Grid