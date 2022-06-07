import React from 'react'
import { formatPrice } from '../../Utils/Helpers'
import { Link } from 'react-router-dom'

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
            <div>
                {/* <table className='table table-striped table-bordered table-sm'>
                    <thead>
                        <tr>
                            {headers.map((header) => {
                                return (
                                    <th
                                        key={header}
                                        className='p-3'
                                        scope='col'
                                    >
                                        {header}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody> */}
                {ProductsArray.map((product) => {
                    const {
                        id,
                        name,
                        image,
                        description,
                        price,
                        salePrice,
                        sales,
                        category,
                        company,
                    } = product
                    return (
                        <div
                            class='card m-auto mb-3'
                            style={{
                                maxWidth: '920px',
                            }}
                        >
                            <div class='row g-0'>
                                <div class='col-md-4'>
                                    <img
                                        src={image}
                                        class='img-fluid rounded-start'
                                        style={
                                            {
                                                // maxHeight: '200px',
                                            }
                                        }
                                        alt='...'
                                    />
                                </div>
                                <div class='col-md-8'>
                                    <div class='card-body'>
                                        <h5 class='card-title'>{name}</h5>
                                        <p class='card-text'>{description}</p>
                                        <p class='card-text'>
                                            <small class='text-muted'>
                                                Last updated 3 mins ago
                                            </small>
                                        </p>
                                        <Link
                                            className='btn btn-dark'
                                            to={
                                                '/AdminDashboard/ProductEdit/' +
                                                id
                                            }
                                        >
                                            Edit Product
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    // return (
                    //   <tr key={id}>
                    //     <td style={{ minWidth: '7rem' }}>{id}</td>
                    //     <td style={{ minWidth: '7rem' }}>
                    //       <img
                    //         src={image}
                    //         alt=''
                    //         style={{
                    //           width: '60px',
                    //           height: '40px',
                    //         }}
                    //       />
                    //     </td>
                    //     <td style={{ minWidth: '7rem' }}>{name}</td>
                    //     <td style={{ minWidth: '7rem' }}>{formatPrice(price)}</td>
                    //     <td style={{ minWidth: '7rem' }}>{sales}</td>
                    //     <td style={{ minWidth: '7rem' }}>
                    //       <Link
                    //         className='btn btn-warning'
                    //         to={'/AdminDashboard/ProductEdit/' + id}>
                    //         Edit
                    //       </Link>
                    //     </td>
                    //   </tr>
                    // );
                })}
                {/* </tbody>
                </table> */}
            </div>
        </section>
    )
}

export default ProductsData
