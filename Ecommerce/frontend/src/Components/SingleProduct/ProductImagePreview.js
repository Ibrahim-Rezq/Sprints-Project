import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ProductImagePreview({ images }) {
  return (
    <Carousel className='product-slider '>
      {images &&
        images.length > 0 &&
        images.map((img) => {
          return (
            <div>
              <img src={img} />
              <p className='legend'></p>
            </div>
          );
        })}
    </Carousel>
  );
}
export default ProductImagePreview;
