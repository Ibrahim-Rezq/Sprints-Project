import React from 'react';
import { Link } from 'react-router-dom';
function HomeProductCard({ Product }) {
  const { id, name, images } = Product;
  return (
    <div
      className='pb-5 mb-4'
      style={{
        maxWidth: '20rem',
      }}>
      <div className='card rounded shadow-sm border-0'>
        <div className='card-body p-0 '>
          <img
            src={images[0].url}
            alt=''
            className='img-fluid d-block mx-auto mb-3'
          />
          <h5>{name}</h5>
          <p className='small text-muted font-italic'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className='d-flex justify-content-between align-items-center mb-2 px-3'>
            <p className='m-0 '>$30.00</p>
            <Link to={'/product/' + id} className='btn btn-danger '>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
