import React from 'react'
import { AddToCartButtons } from '../Products'
import { ReviewsStars } from '.'
import { formatPrice } from '../../Utils/Helpers'
import { BsCheck, BsX } from 'react-icons/bs'

const ProductInfo = ({ product }) => {
    const {
        _id: id,
        name,
        price,
        brand,
        freeShipping,
        stockCount,
        rating,
        reviewsCount,
        onSale,
        saleNumber,
    } = product
    console.log(stockCount)
    if (product)
        return (
            <div className='product-text-side p-0 my-4 my-xl-0'>
                <h2 className='fw-bold'>{name} </h2>
                <ReviewsStars stars={rating} reviews={reviewsCount} />
                <p className='fs-5 text-danger fw-bold'>
                    {onSale ? (
                        <>
                            {formatPrice(price * (1 - saleNumber / 100))}
                            <sup className='m-0 text-decoration-line-through'>
                                {formatPrice(price)}
                            </sup>
                        </>
                    ) : (
                        <>{formatPrice(price)}</>
                    )}
                </p>
                <p className='lead' style={{ maxWidth: '30rem' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    blanditiis eaque veritatis aliquid! Corporis, eos?
                </p>
                <div className='d-flex justify-content-start align-items-center '>
                    <span className=' me-4 mb-2 fw-bold'>Available: </span>
                    {stockCount > 0 ? 'In Stock' : 'Out of Stock'}
                </div>
                <div className='d-flex justify-content-start align-items-center '>
                    <span className=' me-4 mb-2 fw-bold'>SKU: </span>
                    {id}
                </div>
                <div className='d-flex justify-content-start align-items-center '>
                    <span className=' me-4 mb-2 fw-bold'>Brand: </span>
                    {brand}
                </div>
                <div className='d-flex justify-content-start align-items-center '>
                    <span className=' me-4 mb-2 fw-bold'>FreeShipping: </span>
                    <span className='m-0 mb-2 fs-4 fw-bold'>
                        {freeShipping ? (
                            <BsCheck className='text-success' />
                        ) : (
                            <BsX className='text-danger' />
                        )}
                    </span>
                </div>
                <hr />
                {stockCount > 0 ? (
                    <AddToCartButtons product={product} />
                ) : (
                    'Out of Stock'
                )}
            </div>
        )
    else return <></>
}

export default ProductInfo
