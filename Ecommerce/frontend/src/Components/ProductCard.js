import React from 'react'
import styled from 'styled-components'

function ProductCard({ Product }) {
    const {
        id,
        name,
        image,
        userId,
        price,
        category,
        company,
        featured,
        shipping,
    } = Product
    return (
        <DivStyled>
            <h4>{name}</h4>
            <p>{category}</p>
            <p>{FormatePrice(price)}</p>
        </DivStyled>
    )
}
const DivStyled = styled.div`
    background: red;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`

export default ProductCard
