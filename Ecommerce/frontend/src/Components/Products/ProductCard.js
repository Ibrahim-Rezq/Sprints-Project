import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../Utils/Helpers'

const ProductCard = ({ Product }) => {
    const { REACT_APP_API_URL } = process.env
    const {
        _id: id,
        name,
        image,
        price,
        featured,
        onSale,
        saleNumber,
    } = Product
    return (
        <Link to={'/product/' + id}>
            <div
                className='pb-5 mb-4 '
                style={{
                    maxWidth: '20rem',
                }}
            >
                <div className='card rounded bg-white text-dark shadow-sm border-0'>
                    <div className='card-body p-0 '>
                        <img
                            src={
                                image
                                    ? REACT_APP_API_URL + image
                                    : 'https://fakeimg.pl/640x360'
                            }
                            alt=''
                            className='img-fluid d-block mx-auto mb-3'
                        />
                        <span
                            className={`p-2   position-absolute top-0 start-0 rounded-3 rounded-end ${
                                featured
                                    ? 'bg-danger text-light'
                                    : onSale
                                    ? 'bg-warning text-dark'
                                    : 'd-none'
                            }`}
                        >
                            {(featured && 'featured') ||
                                (onSale && 'onSale' + ` ${saleNumber}%`)}
                        </span>
                        <div className='d-flex justify-content-between align-items-center mb-2 px-3'>
                            <h6>{name}</h6>

                            {onSale ? (
                                <p className='m-0'>
                                    <sub className='m-0 text-decoration-line-through'>
                                        {formatPrice(price)}
                                    </sub>
                                    {formatPrice(
                                        price * (1 - saleNumber / 100)
                                    )}
                                </p>
                            ) : (
                                <p className='m-0'>{formatPrice(price)}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
