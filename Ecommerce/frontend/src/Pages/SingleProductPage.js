import React from 'react'
import {
    ProductImagePreview,
    ProductReviews,
    AddToCartButtons,
} from '../Components'

function SingleProductPage() {
    return <div className='container'>
        <div className='d-flex justify-content-around'>
        
         <div className=''>
        <ProductImagePreview/>

        
        </div>
        <div className='d-flex flex-column'>
               <ProductReviews/>
               <AddToCartButtons/>
            </div>
        </div>
    </div>
}

export default SingleProductPage
