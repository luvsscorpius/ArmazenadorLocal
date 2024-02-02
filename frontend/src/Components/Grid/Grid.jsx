import React from "react";
import * as G from './Styles'

const Grid = () => {
    return (
        <G.GridContainer>
            <G.Table>
                <G.Thead>
                    <G.Tr>
                        <G.Th>Nome</G.Th> 
                    </G.Tr>

                    <G.Tr>
                        <G.Th>Sobrenome</G.Th> 
                    </G.Tr>
                </G.Thead>
            </G.Table>
        </G.GridContainer>
    )
}

export default Grid