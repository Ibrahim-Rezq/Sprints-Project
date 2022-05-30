import React, { useEffect } from 'react'
import { CartContent } from '../Components'
// Dont Mind Redux ToolKit Related
///////////////////////////////////////////////////
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart, selectCount } from '../Redux/Features/Cart/CartSlice'
///////////////////////////////////////////////////
function CartPage() {
    // Dont Mind Redux ToolKit Related
    ///////////////////////////////////////////////////
    const { cart } = useSelector(selectCount)
    const dispatch = useDispatch()

    useEffect(() => {}, [])
    ///////////////////////////////////////////////////

    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ height: 'calc(100vh - 60px)' }}
        >
            <CartContent content={cart} />
        </div>
    )
}

export default CartPage
