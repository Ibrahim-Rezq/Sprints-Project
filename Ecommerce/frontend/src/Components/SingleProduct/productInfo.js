import React from 'react';
import { AddToCartButtons } from '../Products';
import { formatPrice } from '../../Utils/Helpers';

const ProductInfo = ({ product }) => {
  const {
    id,
    name,
    images,
    colors,
    price,
    category,
    company,
    featured,
    shipping,
    stock,
  } = product;
  if (product)
    return (
      <div className='product-text-side p-0 my-4 my-xl-0'>
        <h2 className='fw-bold'>{name} </h2>
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
        <hr />
        <AddToCartButtons product={product} />
      </div>
    );
  else return <></>;
};

export default ProductInfo;
