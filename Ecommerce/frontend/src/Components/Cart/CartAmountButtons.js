import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
function CartAmountButtons() {
    return (
        <span className='d-flex justify-content-evenly'>
            <button className='border-0 bg-transparent '>
                <AiOutlineMinus />
            </button>
            <button className='border-0 bg-transparent '>
                <AiOutlinePlus />
            </button>
        </span>
    )
}

export default CartAmountButtons
