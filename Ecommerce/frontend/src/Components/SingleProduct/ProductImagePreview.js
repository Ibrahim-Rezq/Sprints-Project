import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


function ProductImagePreview() {
    const imageArray = [
        'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ' https://images.pexels.com/photos/4714924/pexels-photo-4714924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8947923/pexels-photo-8947923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]

    return (
        <Carousel className="product-slider ">
            {imageArray.map((img) => {
                return (
                    <div className=''>
                        <img src={img} />
                        
                    </div>
                )
            })}
        </Carousel>
    )
}
export default ProductImagePreview
