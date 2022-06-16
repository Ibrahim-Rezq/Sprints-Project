import React from 'react'
import { ProductCard } from '../Products'
import { Link } from 'react-router-dom'

function Featured({ FeaturedProducts, name, bgColor }) {
    return (
        <section
            className={'text-center text-dark'}
            style={{ background: bgColor }}
        >
            <section className='container'>
                <h3 className='fw-bold display-4  text-center py-5'>{name}</h3>
                <div className='underline'></div>
                <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                    {FeaturedProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id + product.name}
                                Product={product}
                            />
                        )
                    })}
                </div>
                <div className='d-flex justify-content-center py-2'>
                    <Link className='btn-lg  btn-danger my-3' to='/products'>
                        All products
                    </Link>
                </div>
            </section>
        </section>
    )
}

export default Featured
