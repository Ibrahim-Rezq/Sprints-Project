import React, { useState } from 'react';
import CartAmountButtons from '../Cart/CartAmountButtons';
import styles from './Products.module.css';
import { useCartContext } from '../../Context/CartContext';

function AddToCartButtons({ product }) {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(product.colors[0]);

  const handleSetAmount = (num) => {
    let sum = amount + num;
    if (sum > product.stock) sum = product.stock;
    if (sum < 1) sum = 1;
    setAmount(sum);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id + mainColor,
      color: mainColor,
      amount,
      product,
    });
  };
  return (
    <div className='p-4'>
      <div className='row align-items-center mb-4'>
        <span className='col-4 col-md-2  fw-bold m-0'>Color : </span>
        <div className='col align-items-center '>
          {product.colors.map((clr) => {
            return (
              <button
                className={`btn mx-2 border-secondary ${
                  clr == mainColor ? 'border-dark' : ''
                }`}
                style={{
                  background: clr,
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  padding: 0,
                }}
                onClick={() => setMainColor(clr)}></button>
            );
          })}
        </div>
      </div>
      <div className='w-25 justify-content-start mb-4'>
        <CartAmountButtons amount={amount} handleSetAmount={handleSetAmount} />
      </div>
      <button className=' btn btn-danger btn-lg py-1' onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartButtons;
