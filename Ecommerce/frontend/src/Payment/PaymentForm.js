import React from 'react'
import CreditCardForm from './methods/CreditCardForm'

function PaymentForm({ handleFormData }) {
    return (
        <div className='payment-form'>
            <div className='payment-methods'>
                <span>Choose your payment method </span>
                <select
                    className='mb-4'
                    name='paymentMethod'
                    onChange={handleFormData}
                >
                    <option value='Credit Card'>Credit Card</option>
                    <option value='PayPal'>PayPal</option>
                    <option value='Pay at delivery'>Pay at delivery</option>
                </select>
                <div className='methods'>
                    <CreditCardForm />
                </div>
            </div>
        </div>
    )
}

export default PaymentForm
