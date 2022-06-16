import React, { useState } from 'react'

function ProductImagePreview({ image }) {
    // const [mainImg, setMainImg] = useState(image)
    const { REACT_APP_API_URL } = process.env

    return (
        <section
            className='row text-center justify-content-center m-0 my-4 my-xl-0'
            style={{
                width: '35rem',
                borderRadius: '0.25rem',
            }}
        >
            <img
                src={
                    image
                        ? REACT_APP_API_URL + image
                        : 'https://fakeimg.pl/640x360'
                }
                alt='Main Img'
                style={{
                    objectFit: 'cover',
                    height: '500px',
                    width: '100%',
                    padding: 0,
                }}
            />
            {/* <div className='mt-2 p-0 col-12 row justify-content-between'>
        {images.map((img) => {
          return (
            <img
              key={img.url}
              src={img.url}
              alt={img.url}
              onClick={(e) => {
                setMainImg(img.url);
              }}
              className='col-2 p-0'
              style={{
                objectFit: 'cover',
                height: '75px',
              }}
            />
          );
        })}
      </div> */}
        </section>
    )
}
export default ProductImagePreview
