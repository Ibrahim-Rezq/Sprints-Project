import React, { useState } from 'react'

function ProductImagePreview({ images = [{ url: '' }] }) {
    const [mainImg, setMainImg] = useState(images[0].url)
    return (
        <section
            className='row text-center justify-content-center m-0 my-4 my-xl-0'
            style={{
                width: '40rem',
                borderRadius: '0.25rem',
            }}
        >
            <img
                src={mainImg}
                alt='Main Img'
                style={{
                    objectFit: 'cover',
                    height: '500px',
                    width: '100%',
                    padding: 0,
                }}
            />
            <div className='mt-2 p-0 col-12 row justify-content-between'>
                {images.map((img) => {
                    return (
                        <img
                            key={img.url}
                            src={img.url}
                            alt={img.url}
                            onClick={(e) => {
                                setMainImg(img.url)
                            }}
                            className='col-2 p-0'
                            style={{
                                objectFit: 'cover',
                                height: '75px',
                            }}
                        />
                    )
                })}
            </div>
        </section>
    )
}
export default ProductImagePreview
