import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { formatPrice } from '../../Utils/Helpers'
import { Link } from 'react-router-dom'

const ProcedeToCheckOutButtons = () => {
    const { total, totalAmount } = useCartContext()
    return (
        <>
            <div className='d-flex justify-content-center align-items-center  mx-2 p-2 rounded '>
                <div className={`card bg-light mb-3 text-center w-100`}>
                    <div className='card-header fs-5 text-capitalize '>
                        Totals
                    </div>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center m-2'>
                            <span className='me-2 fw-bold'>Total Items: </span>
                            {totalAmount}
                        </div>
                        <div className='d-flex justify-content-start align-items-center m-2'>
                            <span className='me-2 fw-bold'>Total Amount: </span>
                            {formatPrice(total)}
                        </div>
                    </div>
                    <div className={`card-footer bg-transparent `}>
                        <Link to='/checkout' className='btn btn-danger'>
                            {' '}
                            Procede To Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProcedeToCheckOutButtons
