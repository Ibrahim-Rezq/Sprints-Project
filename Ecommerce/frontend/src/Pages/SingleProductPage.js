import React from 'react';
import {
    ProductImagePreview,
    ProductReviews,
    AddToCartButtons, 
    productInfo,
} from '../Components';


function SingleProductPage() {
 
    return (
        <div className='container'>
            <productInfo/>
            <div
                className='d-flex justify-content-around align-items-center '
                style={{ minHeight: 'calc(100vh - 60px)' }} >
                    
                  
                <ProductImagePreview />
                
                    <AddToCartButtons />
                
            </div>
        </div>
    )
}

export default SingleProductPage
