import React from 'react';
import { AddToCartButtons } from '../Products';
import { ReviewsStars } from '.';
import { formatPrice } from '../../Utils/Helpers';
import { BsCheck, BsX } from 'react-icons/bs';

const ProductInfo = ({ product }) => {
  const { id, name, price, company, shipping, stock } = product;
  if (product)
    return (
      <div className='product-text-side p-0 my-4 my-xl-0'>
        <h2 className='fw-bold'>{name} </h2>
        <ReviewsStars stars={product.stars} reviews={product.reviews} />
        <p className='fs-5 fw-bold text-danger'>{formatPrice(price)}</p>
        <p className='lead' style={{ maxWidth: '30rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          blanditiis eaque veritatis aliquid! Corporis, eos?
        </p>
        <div className='d-flex justify-content-start align-items-center '>
          <span className=' me-4 mb-2 fw-bold'>Available: </span>
          {stock > 0 ? 'In Stock' : 'Out of Stock'}
        </div>
        <div className='d-flex justify-content-start align-items-center '>
          <span className=' me-4 mb-2 fw-bold'>SKU: </span>
          {id}
        </div>
        <div className='d-flex justify-content-start align-items-center '>
          <span className=' me-4 mb-2 fw-bold'>Brand: </span>
          {company}
        </div>
        <div className='d-flex justify-content-start align-items-center '>
          <span className=' me-4 mb-2 fw-bold'>FreeShipping: </span>
          <span className='m-0 mb-2 fs-4 fw-bold'>
            {shipping ? (
              <BsCheck className='text-success' />
            ) : (
              <BsX className='text-danger' />
            )}
          </span>
        </div>
        <hr />
        {stock > 0 ? <AddToCartButtons product={product} /> : 'Out of Stock'}
      </div>
    );
  else return <></>;
};

export default ProductInfo;
