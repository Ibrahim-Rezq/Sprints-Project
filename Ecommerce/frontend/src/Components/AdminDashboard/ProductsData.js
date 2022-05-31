import React from 'react'

function ProductsData() {
    const values = ['item', '  ', 'amount', ' ', 'remove Item']
    return (
        <section className='container text-dark '>
            <div className='d-flex border-bottom border-info border-2 p-1 m-1 align-items-center justify-content-between'>
                {values.map((value) => {
                    return (
                        <h6
                            key={value}
                            className='m-0 text-secondary mx-2 my-3 w-25 text-capitalize'
                        >
                            {value}
                        </h6>
                    )
                })}
            </div>
            <section className='d-flex border-bottom border-secondary border-2 p-1 m-1 align-items-center justify-content-between'>
                <div className='m-0 mx-2 w-25'>
                    <img src={''} alt='' className='img-fluid' />
                </div>
                <h5 className='m-0 mx-2 w-25 text-secondary'>{'saasdas'}</h5>
                <p className='m-0 mx-2 w-25'>{'sdasas'}</p>
            </section>
        </section>
    )
}

export default ProductsData
