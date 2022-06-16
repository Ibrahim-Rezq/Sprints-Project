import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { ProductImagePreview, ProductInfo } from '../Components/SingleProduct'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../Context/ProductContext'
import { Loading } from '../Components/Global'

function SingleProductPage() {
    const { id } = useParams()
    const {
        singleProduct,
        singleProductLoading,
        productsLoading,
        fetchSingleProduct,
    } = useProductsContext()

    useEffect(() => {
        fetchSingleProduct(id)
        // eslint-disable-next-line
    }, [])
    return (
        <div className='container'>
            <Link className='btn btn-danger btn-lg mt-4' to='/products'>
                Back to products
            </Link>
            {!singleProductLoading ? (
                <div
                    className='d-flex justify-content-evenly flex-wrap align-items-center my-4'
                    style={{ minHeight: '80vh' }}
                >
                    <ProductImagePreview image={singleProduct.image} />
                    <ProductInfo product={singleProduct} />
                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default SingleProductPage
