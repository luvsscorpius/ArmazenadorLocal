import React from "react";
import * as G from './Styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import Main from "../Main/Main";

const Grid = ({info}) => {

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

                    {info.length > 0 && info.map(inf => (
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
        </G.GridContainer>
    )
}

export default Grid