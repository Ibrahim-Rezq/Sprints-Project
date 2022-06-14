import React, { useState } from 'react';
import { CartAmountButtons } from './';
import { GoTrashcan } from 'react-icons/go';
import { formatPrice } from '../../Utils/Helpers';
import { useCartContext } from '../../Context/CartContext';

function SingleCartItem({ item: { id, amount, color, product } }) {
  const { removeItem, toggleAmount } = useCartContext();
  const [itemAmount, setItemAmount] = useState(amount);

  const handleSetAmount = (num) => {
    let sum = itemAmount + num;
    if (sum > product.stock) sum = product.stock;
    if (sum < 1) sum = 1;
    setItemAmount(sum);
    toggleAmount(id, sum);
  };

  return (
    <>
      <div className='row py-4 align-items-center justify-content-between justify-content-md-center text-center'>
        <div className='col-6 col-md-4 p-0 m-0 row'>
          <div className='col-6'>
            <img src={product.image} alt='' className='img-fluid rounded ' />
          </div>
          <div className=' col-6 d-flex align-items-center '>
            <h5 className='w-100 text-dark fw-bold'>
              {product.name}{' '}
              <span className='d-inline d-md-none fs-6'>
                {formatPrice(product.price)}
              </span>{' '}
              <span
                className='btn border-secondary'
                style={{
                  background: color,
                  borderRadius: '50%',
                  width: '15px',
                  height: '15px',
                  padding: 0,
                }}></span>
            </h5>
          </div>
        </div>
        <p className='d-none d-md-block col-2 p-0 m-0'>
          {formatPrice(product.price)}
        </p>
        <p className=' col-3 col-md-2 p-0 m-0'>
          <CartAmountButtons
            amount={itemAmount}
            handleSetAmount={handleSetAmount}
          />
        </p>
        <p className='col-2 p-0 m-0'>
          {formatPrice(product.price * itemAmount)}
        </p>
        <p className='fs-4 col-12 col-md-2 m-0 mt-2 mt-md-0 mb-md-2 '>
          <a
            onClick={(e) => {
              e.preventDefault();
              removeItem(id);
            }}
            className='text-danger'>
            <GoTrashcan />
          </a>
        </p>
      </div>
    </>
  );
}

export default SingleCartItem;
