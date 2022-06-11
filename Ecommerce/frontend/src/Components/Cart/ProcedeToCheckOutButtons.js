import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import { formatPrice } from '../../Utils/Helpers';

const ProcedeToCheckOutButtons = () => {
  const { total, totalAmount } = useCartContext();
  return (
    <>
      <div className='d-flex justify-content-center align-items-center  mx-2 p-2 rounded '>
        <div class={`card bg-light mb-3 text-center w-100`}>
          <div class='card-header fs-5 text-capitalize '>Totals</div>
          <div class='card-body'>
            <div className='d-flex justify-content-start align-items-center m-2'>
              <span className='me-2 fw-bold'>Total Items: </span>
              {totalAmount}
            </div>
            <div className='d-flex justify-content-start align-items-center m-2'>
              <span className='me-2 fw-bold'>Total Amount: </span>
              {formatPrice(total)}
            </div>
          </div>
          <div class={`card-footer bg-transparent `}>
            <button className='btn btn-danger'> Procede To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcedeToCheckOutButtons;
