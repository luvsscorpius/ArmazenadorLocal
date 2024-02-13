import styled from 'styled-components'

export const GridContainer = styled.div`
    border: 1px solid #167F92;
    height: 100%;
    width: 90%;
    margin: 5px;
    display: flex;
    justify-content: space-around;
    margin: 10px auto;
    border-radius: 5px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse; // Mescla as bordas com as células
    border-spacing: 8px;
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
        width: 100px;
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
        width: 100px;
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