import React from 'react'
import ProductCard from './ProductCard'
import { Products } from '../../Utils/Constant'

function ProductsGridVeiw() {
    return (
    <div>
        
        <div className='d-flex m-5  text-center '>
            {Products.map((product) => {
                return <ProductCard Product={product} />
            })}
        </div>
       

        </div>
        
    )
}

export default ProductsGridVeiw
