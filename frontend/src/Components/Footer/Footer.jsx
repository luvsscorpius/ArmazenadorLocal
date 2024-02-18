import React from 'react'
import * as F from './Styles'

const Footer = ({onFooterHeight}) => {
    
    return (
        <>
            <F.Box className='footer'>
                <F.FooterContainer>
                    <F.h3><F.a href="https://github.com/luvsscorpius" target="_blank">Designed by and</F.a></F.h3>
                </F.FooterContainer>
            </F.Box>
        </>
    )
}

export default Footer