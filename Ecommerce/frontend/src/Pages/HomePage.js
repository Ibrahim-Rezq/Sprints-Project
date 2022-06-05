import React, { useEffect } from 'react'
import { Featured, Hero } from '../Components/Home'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
    getOnSaleProducts,
    getFeaturedProducts,
    getProducts,
    productsState,
} from '../Redux/Features/Products/ProductsSlice'

function HomePage() {
    const { featuredProducts, onSaleProducts } = useSelector(productsState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getOnSaleProducts())
        dispatch(getFeaturedProducts())
    }, [])
    return (
        <div>
            <Hero />
            <Featured
                FeaturedProducts={featuredProducts}
                bgColor={'white'}
                name={'Featured Products'}
            />
            <Featured
                name={'OnSale Products'}
                bgColor={'light'}
                FeaturedProducts={onSaleProducts}
            />
        </div>
    )
}

export default HomePage
