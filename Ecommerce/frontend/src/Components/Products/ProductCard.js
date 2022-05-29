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
    return <div className="product">
 <div className="sale1">
             <h2> 40%</h2>
            <img src="https://images.pexels.com/photos/8782574/pexels-photo-8782574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sale 1" />
             <p>product.name</p>
        </div>

    </div>

   
}


export default ProductCard
