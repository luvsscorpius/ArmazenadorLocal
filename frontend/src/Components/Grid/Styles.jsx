import styled from 'styled-components'

export const GridContainer = styled.div`
    border: 1px solid red;
    height: 100%;
    margin: 5px;
    display: flex;
    justify-content: space-around;
`

export const Table = styled.table`
    width: 90%;
`

// Utilizada para definir a area do cabeçalho
export const Thead = styled.thead`
    display: flex;
    flex-direction: column; /* Empilha os cabeçalhos verticalmente */
`

// Utilizada para definir a area do corpo da tabela
export const Tbody = styled.tbody`
    display: flex;
    flex-direction: column; /* Empilha os cabeçalhos verticalmente */
`

// Outra forma de definir uma coluna (mas diferente do td é utilizada apenas para cabeçalho)
export const Th = styled.th`
    padding: 8px; /* Adiciona um espaçamento interno */
    width: 100%;
`

// Td cria uma coluna para inserção de conteúdos
export const Td = styled.td`
    display: flex;
    align-items: center; /* Para alinhar verticalmente o conteúdo */
    padding: 8px; /* Adiciona um espaçamento interno */
    width: 100%;
    justify-content: center;
`

// Tr é utilizada para definir linhas em tabelas
export const Tr = styled.tr`
    display: flex;
    justify-content: space-between; /* Alinha as células individualmente */
    border: 1px solid blue;
`

export const DateTd = styled(Td)`
    min-width: 100px; /* Defina um tamanho mínimo para a célula de data */
`