import React from 'react'
import CartAmountButtons from './CartAmountButtons'
import { GoTrashcan } from 'react-icons/go'

function SingleCartItem({ item: { amount, product } }) {
    return (
        <>
            <div className='d-flex border-bottom border-secondary border-2 p-1 m-1 align-items-center justify-content-between'>
                <div className='m-0 mx-2 w-25'>
                    <img src={product.image} alt='' className='img-fluid' />
                </div>
                <h5 className='m-0 mx-2 w-25 text-secondary'>{product.name}</h5>
                <p className='m-0 mx-2 w-25'>{amount}</p>
                <p className=' m-0 px-2 mb-1 w-25'>
                    <CartAmountButtons />
                </p>
                <p className='fs-4 m-0 px-2 mb-1 w-25'>
                    <a
                        onClick={(e) => e.preventDefault()}
                        className='text-danger'
                    >
                        <GoTrashcan />
                    </a>
                </p>
            </div>
        </>
    )
}

export default SingleCartItem
