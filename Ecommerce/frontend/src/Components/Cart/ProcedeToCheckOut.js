import React, { useEffect } from 'react'
import OrderReview from './OrderReview'
import { useCartContext } from '../../Context/CartContext'
import PaymentForm from '../../Payment/PaymentForm'
import { ShippingDetails } from '../Shipping'

import classes from './css/ProceedToCheckout.module.css'

function ProcedeToCheckOut({ formData, setFormData }) {
    const { total, cart } = useCartContext()
    const handleFormData = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        setFormData({ ...formData, amount: total })
    }, [total])

    return (
        <section
            className=' d-flex justify-content-center align-items-center '
            style={{
                minHeight: 'calc(100vh - 80px)',
            }}
        >
            {' '}
            <div className='container mt-5'>
                <div className={classes['checkout-wrapper'] + ' row'}>
                    <div
                        className={
                            classes['left-wrapper'] + ' col-xs-12 col-md-8'
                        }
                    >
                        <h2>Shipping Details</h2>
                        <div id='shipping-details'>
                            <ShippingDetails handleFormData={handleFormData} />
                        </div>
                        <h2>Payment Details</h2>
                        <div id='checkout' className={classes.checkout}>
                            <div className={classes['payment-process']}>
                                <PaymentForm handleFormData={handleFormData} />
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            classes['right-wrapper'] + ' col-xs-12 col-md-4'
                        }
                    >
                        <OrderReview total={total} cart={cart} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcedeToCheckOut
