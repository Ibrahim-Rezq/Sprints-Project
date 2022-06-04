import React from 'react';
import ProductSingleReview from './';

function ProductReviews() {
  return (
    <div className='product-text-side'>
      <h1>Playstation 4 Controller </h1>
      <h2>$59.99</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis
        eaque veritatis aliquid! Corporis, eos?
      </p>
      <div className='d-flex justify-content-between align-items-center '>
        <div>
          <p className='product-status'>Colors : </p>
          <p className='product-status'>SKU: </p>
          <p className='product-status'>Brand: </p>
        </div>
        <div>
          <p>In Stock</p>
          <p>RectQrvzMGUGj1mqa</p>
          <p>Sony</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProductReviews;
