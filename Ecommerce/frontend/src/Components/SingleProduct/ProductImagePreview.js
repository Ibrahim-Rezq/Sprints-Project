// import React, { useState } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';


// function ProductImagePreview() {
//     const imageArray = [
//         'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         'https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         ' https://images.pexels.com/photos/4714924/pexels-photo-4714924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         'https://images.pexels.com/photos/8947923/pexels-photo-8947923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     ]
 import React, { useState } from 'react'

function ProductImagePreview({ images = [{ url: '' }] }) {
    const [mainImg, setMainImg] = useState(images[0].url)
    return (
        // <Carousel className="product-slider ">
        //     {imageArray.map((img) => {
        //         return (
        //             <div className=''>
        //                 <img src={img} />
                        
        //             </div>
        //         )
        //     })}
        // </Carousel>
        <section
            className='p-4  text-center'
            style={{
                maxWidth: '50rem',
                borderRadius: '0.25rem',
            }}
        >
            <img
                src={mainImg}
                alt='Main Image'
                style={{
                    width: '40rem',
                    height: '30rem',
                    objectFit: 'cover',
                }}
            />
            <div className='pt-2 d-flex justify-content-between'>
                {images.map((img) => {
                    return (
                        <img
                            src={img.url}
                            onClick={(e) => {
                                setMainImg(img.url)
                            }}
                            style={{
                                margin:" 0rem .25rem ",
                                minWidth: 130,
                                height: 90,
                                objectFit: 'cover',
                                border: '2px solid gray',
                                borderRadius: '0.25rem',
                            }}
                        />
                    )
                })}
            </div>
        </section>
    )
}
export default ProductImagePreview
