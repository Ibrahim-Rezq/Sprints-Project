import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../../Utils/Constant'

const initialState = {
    filters: {
        category: 'all',
        brand: 'all',
        color: 'all',
        searchText: '',
        freeShipping: false,
        mimPrice: 0,
        maxPrice: 0,
        price: 0,
    },
    products: [],
    productsLoading: false,
    productsError: false,
    filterdProducts: [],
    featuredProducts: [],
    onSaleProducts: [],
    singleProduct: {},
    singleProductLoading: false,
    singleProductError: false,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getSingleProductBegin: (state) => {
            state.singleProductLoading = true
            state.singleProductError = false
        },
        getSingleProductSucsses: (state, action) => {
            state.singleProduct = { ...action.payload }
            state.singleProductLoading = false
            state.singleProductError = false
        },
        getSingleProductError: (state) => {
            state.singleProductLoading = false
            state.singleProductError = true
        },

        initProductsData: (state) => {
            state.onSaleProducts = [
                ...state.products.filter((prod) => prod.onSale),
            ]
            state.featuredProducts = [
                ...state.products.filter((prod) => {
                    return prod.featured
                }),
            ]
            const maxPrice = Math.max(...state.products.map((p) => p.price))
            state.filters.maxPrice = maxPrice
            state.filters.price = maxPrice
            state.filterdProducts = [...state.products]
        },
        getProductsBegin: (state) => {
            state.productsLoading = true
            state.productsError = false
        },
        getProductsSucsses: (state, action) => {
            state.products = [...action.payload]
            state.productsLoading = false
            state.productsError = false
        },
        getProductsError: (state) => {
            state.productsLoading = false
            state.productsError = true
        },
        filteredProducts: (state, action) => {
            const object = action.payload.name
            state.filters[object] = action.payload[object]

            let tempProducts = [...state.products]
            if (state.filters.category !== 'all') {
                tempProducts = [
                    ...tempProducts.filter((p) => {
                        return p.category === state.filters.category
                    }),
                ]
            }
            if (state.filters.brand !== 'all') {
                tempProducts = [
                    ...tempProducts.filter((p) => {
                        return p.brand == state.filters.brand
                    }),
                ]
            }
            if (state.filters.color !== 'all') {
                tempProducts = [
                    ...tempProducts.filter((p) => {
                        return p.colors.includes(state.filters.color)
                    }),
                ]
            }
            if (state.filters.price !== state.filters.maxPrice) {
                tempProducts = [
                    ...tempProducts.filter((p) => {
                        return p.price <= state.filters.price
                    }),
                ]
            }

            if (state.filters.searchText !== '') {
                tempProducts = [
                    ...tempProducts.filter((p) => {
                        return p.name
                            .toLowerCase()
                            .includes(action.payload[object].toLowerCase())
                    }),
                ]
            }
            if (state.filters.freeShipping !== false) {
                tempProducts = [
                    ...tempProducts.filter((p) => {
                        return p.freeShipping
                    }),
                ]
            }
            state.filterdProducts = [...tempProducts]
        },

        clearFilters: (state, action) => {
            state.filterdProducts = [...state.products]
            state.filters.category = 'all'
            state.filters.brand = 'all'
            state.filters.color = 'all'
            state.filters.freeShipping = false
        },
    },
})

export const {
    getSingleProductBegin,
    getSingleProductSucsses,
    getSingleProductError,
    initProductsData,
    getProductsBegin,
    getProductsSucsses,
    getProductsError,
    filteredProducts,
    searchProducts,
    toggleFreeShipping,
    clearFilters,
    priceChange,
} = productsSlice.actions
export const productsState = (state) => state.products

export default productsSlice.reducer
