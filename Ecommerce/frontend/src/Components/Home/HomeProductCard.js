import React from 'react'
import styled from 'styled-components'
import { FaPercent } from 'react-icons/fa'
function HomeProductCard({ Product }) {
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
        <div className=' w-25 pb-5 mb-4 '>
            <div className='card rounded shadow-sm border-0'>
                <div className='card-body p-0 '>
                    <img
                        src={image}
                        alt=''
                        className='img-fluid d-block mx-auto mb-3'
                    />
                    <h5>
                        <a href='#' className='text-dark'>
                            Awesome product
                        </a>
                    </h5>
                    <p className='small text-muted font-italic'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <div className='d-flex justify-content-between align-items-center mb-2 px-3'>
                        <p className='m-0'>$30.00</p>
                        <button className='btn btn-danger '>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProductCard
