import React from 'react';

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
  } = product;
  if (product)
    return (
      <div className='product-text-side'>
        <h2>{name} </h2>
        <h4>{formatPrice(price)}</h4>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          blanditiis eaque veritatis aliquid! Corporis, eos?
        </p>
        <div className='d-flex justify-content-start align-items-center '>
          <h5 className=' me-4'>SKU : </h5>
          <p>{id}</p>
        </div>
        <div className='d-flex justify-content-start align-items-center '>
          <h5 className=' me-4'>Colors : </h5>
          <p>
            {colors.map((color) => {
              return (
                <button
                  className='btn mx-2'
                  style={{
                    background: color,
                    borderRadius: '50%',
                    width: '15px',
                    height: '15px',
                    padding: 0,
                  }}></button>
              );
            })}
          </p>
        </div>
        <div className='d-flex justify-content-start align-items-center '>
          <h5 className=' me-4'>Brand: </h5>
          <p>{company}</p>
        </div>
        <hr />
      </div>
    );
  else return <></>;
};

export default ProductInfo;
