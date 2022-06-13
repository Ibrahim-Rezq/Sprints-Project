import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
function CartAmountButtons({ amount, handleSetAmount }) {
  return (
    <span className='row '>
      <button
        onClick={() => handleSetAmount(-1)}
        className='col-4 m-0 p-0 border-0 bg-transparent '>
        <AiOutlineMinus />
      </button>
      <p className='col-4 m-0 fs-2 fw-bold'>{amount}</p>
      <button
        onClick={() => handleSetAmount(1)}
        className='col-4 m-0 p-0 border-0 bg-transparent '>
        <AiOutlinePlus />
      </button>
    </span>
  );
}

export default CartAmountButtons;
