import React from 'react'
import styled from 'styled-components'

function ProductCard({ Product }) {
    const {
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
    <div className="card bg-dark text-white" style={{width: '18rem'}}>
    <img src={image} className="card-img-top w-100" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">name</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
)
   
}


export default ProductCard
