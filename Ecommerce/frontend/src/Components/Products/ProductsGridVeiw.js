import React, { useEffect } from 'react'
import { ProductCard } from './'
import styles from './css/ProductCard.module.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
    getSingleProduct,
    productsState,
    getProducts,
} from '../../Redux/Features/Products/ProductsSlice'
import { Loading } from '../Global'
import { getUniqueValues } from '../../Utils/Helpers'

function ProductsGridVeiw() {
    const { products } = useSelector(productsState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    // getting uniqu valus for fillters
    // useEffect(() => {
    //     console.log(getUniqueValues(products, 'category'))
    // }, [products])

    return (
        <div className={styles.procutsGridView}>
            {products && products.length > 0 ? (
                products.map((product) => {
                    return (
                        <div className={styles.productGridView}>
                            <ProductCard Product={product} />
                        </div>
                    )
                })
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default ProductsGridVeiw
