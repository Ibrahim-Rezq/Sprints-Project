import React from 'react'
import FormInput from '../../Components/Global/FormInput'
import classes from './css/CreditCard.module.css'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { useOrdersContext } from '../../Context/OrderContext'
import { useUserContext } from '../../Context/UserContext'

function CreditCardForm(props) {
    const { total, totalAmount, clearCart } = useCartContext()
    const { addOrder } = useOrdersContext()
    const { user } = useUserContext()
    const navigate = useNavigate()
    const handleConfirmation = () => {
        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0')
        var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        var yyyy = today.getFullYear()

        addOrder({
            orderId: Math.floor((total + totalAmount) / 10),
            orderNumber: 2,
            userId: user.userName,
            orderDate: mm + '-' + dd + '-' + yyyy,
            price: total,
            status: 'pending',
        })
        navigate('confirmation')
        setTimeout(() => {
            clearCart()
        }, 3000)
    }

    return (
        <div className={classes['cc-form']}>
            <form>
                <div className={classes['row-elements']}>
                    <FormInput
                        inputId='cc-name'
                        label='Name on the card'
                        inputType='text'
                    ></FormInput>

                    <FormInput
                        inputId='cc-number'
                        label='Card Number'
                        inputType='number'
                    ></FormInput>
                </div>

                <div className={classes['row-elements']}>
                    <FormInput
                        inputId='cc-month'
                        label='month'
                        inputType='number'
                    ></FormInput>

                    <FormInput
                        inputId='cc-year'
                        label='Year'
                        inputType='number'
                    ></FormInput>

                    <FormInput
                        inputId='cc-year'
                        label='CSV'
                        inputType='number'
                    ></FormInput>
                </div>
                <a
                    onClick={handleConfirmation}
                    className='btn btn-danger m-auto'
                >
                    Confirm Order
                </a>
            </form>
        </div>
    )
}

export default CreditCardForm
