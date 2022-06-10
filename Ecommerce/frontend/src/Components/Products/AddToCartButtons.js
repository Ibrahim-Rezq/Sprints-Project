import React, { useState } from 'react';
import CartAmountButtons from '../Cart/CartAmountButtons';
import styles from './Products.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/Features/Cart/CartSlice';

function AddToCartButtons({ product }) {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const handleSetAmount = (num) => {
    let sum = amount + num;
    if (sum > product.stock) sum = product.stock;
    if (sum < 1) sum = 1;
    setAmount(sum);
  };

  const handleAddToCart = () => {
    console.log({ id: '', amount, product });
    dispatch(addItemToCart({ id: '', amount, product }));
  };
  return (
    <div className='p-4'>
      <div className='row align-items-center mb-4'>
        <span className='col-4 col-md-2  fw-bold m-0'>Color : </span>
        <div className='col align-items-center '>
          {product.colors.map((color) => {
            return (
              <button
                className='btn mx-2 border-secondary'
                style={{
                  background: color,
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  padding: 0,
                }}></button>
            );
          })}
        </div>
      </div>
      <div className='w-25 justify-content-start mb-4'>
        <CartAmountButtons amount={amount} handleSetAmount={handleSetAmount} />
      </div>
      <button className=' btn btn-danger btn-lg py-1' onClick={handleAddToCart}>
        {' '}
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartButtons;
