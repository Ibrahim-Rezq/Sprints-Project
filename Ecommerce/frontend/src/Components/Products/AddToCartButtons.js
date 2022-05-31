import React from 'react'
import CartAmountButtons from '../Cart/CartAmountButtons'
function AddToCartButtons() {
    return <div>
   <div className=' ps-4 d-flex justify-content-between align-items-center '>
            <div>
            <p className=' p-3 product-status'>Color: </p>
            <button className='mt-5 btn btn-primary btn-lg'> Add to cart</button>
           
            </div>
         <div  >
        <p className='p-3'>colors in progress</p> 
        <button className='mt-5 btn btn-primary btn-lg '>Back to products</button> 
    </div>

    </div>
    <div className='d-flex  justify-content-between'>
     
   
    </div>
    </div>
    
}

export default AddToCartButtons
