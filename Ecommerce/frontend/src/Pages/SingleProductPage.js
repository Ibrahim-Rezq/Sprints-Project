import React from 'react'
import {
    ProductImagePreview,
    ProductReviews,
    AddToCartButtons,
} from '../Components'

function SingleProductPage() {
    return <div className='container-fluid '>
        <div className='d-flex  flex-wrap  justify-content-around'>
        
         <div className=' '>
        <ProductImagePreview/>

        
        </div>
        <div className='d-flex flex-column mb-4 '>
               <ProductReviews/>
               <AddToCartButtons/>
            </div>
        </div>
    </div>
}

export default SingleProductPage
