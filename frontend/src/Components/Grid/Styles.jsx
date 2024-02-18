import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const GridContainer = styled.div`
    border: 1px solid #167F92;
    width: 90%;
    margin: 5px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 10px auto;
    border-radius: 5px;
    max-height: 77vh;
    overflow-y: hidden;

    @media (max-width: 700px) {
        overflow-y: scroll;
    }
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse; // Mescla as bordas com as células
    border-spacing: 8px;
    max-height: 77vh;
`

// Utilizada para definir a area do cabeçalho
export const Thead = styled.thead`
    display: flex;
    flex-direction: column; /* Empilha os cabeçalhos verticalmente */
    background-color: #167F92;
    color: #fff;
`

// Utilizada para definir a area do corpo da tabela
export const Tbody = styled.tbody`
    display: flex;
    flex-direction: column; /* Empilha os cabeçalhos verticalmente */
`

// Outra forma de definir uma coluna (mas diferente do td é utilizada apenas para cabeçalho)
export const Th = styled.th`
    padding: 1em; /* Adiciona um espaçamento interno */
    width: 100%;
    border-right: 1px solid #167F92; /* Adiciona borda direita */
    border-bottom: 1px solid #167F92; /* Adiciona borda inferior */ 
    box-sizing: border-box;

    &.id-column {
        width: 150px;
    }
`

// Td cria uma coluna para inserção de conteúdos
export const Td = styled.td`
    display: flex;
    align-items: center; /* Para alinhar verticalmente o conteúdo */
    padding: 1.1em; /* Adiciona um espaçamento interno */
    width: 100%;
    justify-content: center;
    border-right: 1px solid #167F92; /* Adiciona borda direita */
    border-bottom: 1px solid #167F92; /* Adiciona borda inferior */
    
    &.id-column {
        width: 150px;
    }

`

// Tr é utilizada para definir linhas em tabelas
export const Tr = styled.tr`
    display: flex;
    justify-content: space-between; /* Alinha as células individualmente */
`

export const DateTd = styled(Td)`
    min-width: 100px; /* Defina um tamanho mínimo para a célula de data */
`

export const StyledPagination = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;

    li {
        display: inline-block;
        margin-right: 5px;
        height: 30px;
        margin-top: 13px;
    }

    a {
        color: #333;
        padding: 5px 10px;
        border: 1px solid #ccc;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #eee;
        }
    }

    .active a {
        background-color: #167F92;
        color: #fff;
        border-color: #167F92;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
`