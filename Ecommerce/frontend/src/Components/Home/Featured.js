import React from 'react'
import HomeProductCard from './HomeProductCard'

function Featured({ FeaturedProducts, name, bgColor }) {
    return (
        <section className={'bg-' + bgColor + '  text-center '}>
            <section className='container'>
                <h3 className='fw-bold display-4  text-center py-5'>{name}</h3>
                <div className='underline'></div>
                <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                    {FeaturedProducts.map((product) => {
                        return (
                            <HomeProductCard
                                key={product.id}
                                Product={product}
                            />
                        )
                    })}
                </div>
                <div className='d-flex justify-content-center py-2'>
                    <a className='btn-lg  btn-danger my-3' href=''>
                        All products
                    </a>
                </div>
            </section>
        </section>
    )
}

export default Featured
