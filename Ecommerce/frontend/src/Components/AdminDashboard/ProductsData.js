import React from 'react'
import { formatPrice } from '../../Utils/Helpers'

function ProductsData({ ProductsArray }) {
    const headers = [
        '#',
        'Product',
        'Name',
        'Price',
        'Sales Data',
        'Edit Product',
    ]
    return (
        <section className='w-100 text-dark text-center'>
            <h3 className='p-4 display-4'>Products</h3>{' '}
            <div className='table-responsive'>
                <table className='table table-striped table-bordered table-sm'>
                    <thead>
                        <tr>
                            {headers.map((header) => {
                                return (
                                    <th className='p-3' scope='col'>
                                        {header}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {ProductsArray.map((product) => {
                            const {
                                id,
                                name,
                                image,
                                price,
                                salePrice,
                                sales,
                                category,
                                company,
                            } = product

                            return (
                                <tr key={id}>
                                    <td style={{ minWidth: '7rem' }}>{id}</td>
                                    <td style={{ minWidth: '7rem' }}>
                                        <img
                                            src={image}
                                            alt=''
                                            style={{
                                                width: '60px',
                                                height: '40px',
                                            }}
                                        />
                                    </td>
                                    <td style={{ minWidth: '7rem' }}>{name}</td>
                                    <td style={{ minWidth: '7rem' }}>
                                        {formatPrice(price)}
                                    </td>
                                    <td style={{ minWidth: '7rem' }}>
                                        {sales}
                                    </td>
                                    <td style={{ minWidth: '7rem' }}>
                                        <button className='btn btn-warning'>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ProductsData
