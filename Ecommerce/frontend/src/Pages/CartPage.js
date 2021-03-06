import React, { useEffect } from 'react'
import { CartContent, ProcedeToCheckOutButtons } from '../Components/Cart'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { useUserContext } from '../Context/UserContext'

function CartPage() {
    const { cart, clearCart } = useCartContext()
    const { isAuth } = useUserContext()
    return (
        <section
            style={{
                minHeight: 'calc(100vh - 100px)',
            }}
            className='d-flex justify-content-center align-items-center text-dark'
        >
            {cart && cart.length > 0 ? (
                <section className='container'>
                    <CartContent content={cart} />
                    <div className='d-flex justify-content-around align-items-center align-items-md-start flex-column flex-md-row w-100 mt-4'>
                        <button
                            className='d-block mt-4 btn-danger btn'
                            onClick={clearCart}
                        >
                            Clear Carts
                        </button>
                        {isAuth ? (
                            <ProcedeToCheckOutButtons />
                        ) : (
                            <Link
                                className='d-block mt-4 btn-danger btn'
                                to='/accounts/login'
                            >
                                Login Now
                            </Link>
                        )}
                    </div>
                </section>
            ) : (
                <div className='text-center'>
                    <h2>No Items Found in cart</h2>
                    <br />
                    <Link className='btn-danger btn' to='/products'>
                        Shop Now
                    </Link>
                </div>
            )}
        </section>
    )
}

export default CartPage
