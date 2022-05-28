import React from 'react'
import ProductCard from './ProductCard'
import { Products } from '../Utils/Constant'

function ProductsGridVeiw() {
    return (
        <div>
            {Products.map((product) => {
                return <ProductCard Product={product} />
            })}
        </div>
    )
}

export default ProductsGridVeiw
