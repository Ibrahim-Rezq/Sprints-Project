import React from 'react'
import CartAmountButtons from '../Cart/CartAmountButtons'
import styles from './Products.module.css'

function AddToCartButtons({ colors }) {
    //  { id: 'recRoQD1w0ItHzafo', amount: 5, product: Products[1] }
    return (
        <div className='p-4'>
            <div className='row align-items-center mb-4'>
                <span className='col-4 col-md-2  fw-bold m-0'>Color : </span>
                <div className='col align-items-center '>
                    {colors.map((color) => {
                        return (
                            <button
                                className='btn mx-2 border-secondary'
                                style={{
                                    background: color,
                                    borderRadius: '50%',
                                    width: '20px',
                                    height: '20px',
                                    padding: 0,
                                }}
                            ></button>
                        )
                    })}
                </div>
            </div>
            <div className='w-25 justify-content-start mb-4'>
                <CartAmountButtons amount={5} />
            </div>
            <button className=' btn btn-danger btn-lg py-1'>
                {' '}
                Add to cart
            </button>
        </div>
    )
}

export default AddToCartButtons
