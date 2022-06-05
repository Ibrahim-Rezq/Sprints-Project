import React, { useState } from 'react'

function ProductImagePreview({ images = [{ url: '' }] }) {
    const [mainImg, setMainImg] = useState(images[0].url)
    return (
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
                                maxWidth: 125,
                                height: 75,
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
