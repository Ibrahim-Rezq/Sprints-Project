import React from 'react'
import { formatPrice } from '../../Utils/Helpers'
import styles from "./Products.module.css";

const ProductCard = ({ Product }) => {
    const {
        name,
        image,
        userId,
        price,
        category,
        company,
        featured,
        shipping,
    } = Product
    return (
        <div  className='   pb-5 mb-4 '>
            <div className='card rounded shadow-sm border-0'>
                <div className='card-body p-0 '>
                    <img
                        src={image}
                        alt=''
                        className='img-fluid d-block mx-auto mb-3'
                    />
                    <div className='d-flex justify-content-between align-items-center mb-2 px-3'>
                        <h5 >
                            <a href='#' className='text-dark'>
                                Awesome product
                            </a>
                        </h5>
                        <p className='m-0'>{formatPrice(price)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
