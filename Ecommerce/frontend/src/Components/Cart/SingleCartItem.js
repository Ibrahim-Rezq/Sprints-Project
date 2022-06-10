import React from 'react'
import { CartAmountButtons } from './'
import { GoTrashcan } from 'react-icons/go'
import { formatPrice } from '../../Utils/Helpers'

function SingleCartItem({ item: { amount, product } }) {
    return (
        <>
            <div className='row py-4 align-items-center justify-content-between justify-content-md-center text-center'>
                <div className='col-6 col-md-4 p-0 m-0 row'>
                    <div className='col-6'>
                        <img
                            src={product.image}
                            alt=''
                            className='img-fluid rounded '
                        />
                    </div>
                    <div className=' col-6 d-flex align-items-center '>
                        <h5 className='w-100 text-dark fw-bold'>
                            {product.name}
                        </h5>
                    </div>
                </div>
                <p className='d-none d-md-block col-2 p-0 m-0'>
                    {formatPrice(product.price)}
                </p>
                <p className=' col-3 col-md-2 p-0 m-0'>
                    <CartAmountButtons amount={amount} />
                </p>
                <p className='col-2 p-0 m-0'>
                    {formatPrice(product.price * amount)}
                </p>
                <p className='fs-4 col-12 col-md-2'>
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
