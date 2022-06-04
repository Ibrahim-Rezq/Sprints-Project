import React from 'react';
import CartAmountButtons from '../Cart/';
import styles from './css/ProductCard.module.css';

function AddToCartButtons() {
  return (
    <div>
      <div className='  '>
        <div className='p-4 d-flex justify-content-between'>
          <p className='product-status'>Color : </p>
          <div className='d-flex justify-content-evenly w-25'>
            <button
              className={`${styles.filterColors} ${styles.filtersWhite}`}
              data-color='#ffffff'
              name='color'></button>
            <button
              className={`${styles.filterColors} ${styles.filtersBlack}`}
              name='color'></button>
          </div>
        </div>
        <div className='p-3 d-flex justify-content-between  '>
          <button className=' btn btn-danger btn-lg'> Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartButtons;
