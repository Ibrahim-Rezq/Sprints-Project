import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../Utils/Helpers';
import styles from './css/ProductCard.module.css';

const ProductCard = ({ Product }) => {
  const {
    id,
    name,
    image,
    userId,
    price,
    category,
    company,
    featured,
    shipping,
  } = Product;

  return (
    <Link to={'/product/' + id}>
      <div className='pb-5 mb-4 '>
        <div className='card rounded bg-dark text-light shadow-sm border-0'>
          <div className='card-body p-0 '>
            <img
              src={image}
              alt=''
              className='img-fluid d-block mx-auto mb-3'
            />
            <div className='d-flex justify-content-between align-items-center mb-2 px-3'>
              <h6>{name}</h6>
              <p className='m-0'>{formatPrice(price)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
