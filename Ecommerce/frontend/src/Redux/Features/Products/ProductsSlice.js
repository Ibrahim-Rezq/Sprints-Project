import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../../Utils/Constant'

const initialState = {
    category: 'all',
    brand: 'all',
    color: 'all',
    searchText: '',
    freeShipping: false,
    mimPrice: 0,
    maxPrice: 0,
    price: 0,
    // ^ filters
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
            state.maxPrice = maxPrice
            state.price = maxPrice
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
            state[object] = action.payload[object]

            /*
      
      let tempProducts = [...state.products];
      if (state.category !== 'all') {
        tempProducts = [
          ...tempProducts.filter((p) => {
            return p.category === state.category;
          }),
        ];
      }
      if (state.brand !== 'all') {
        tempProducts = [
          ...tempProducts.filter((p) => {
            return p.brand == state.brand;
          }),
        ];
      }
      if (state.color !== 'all') {
        tempProducts = [
          ...tempProducts.filter((p) => {
            return p.colors.includes(state.color);
          }),
        ];
      }
      state.filterdProducts = [...tempProducts];

      */
            // this above is the code i was talking about

            // every thing bellow is the previous code

            state.filterdProducts = [...state.products]

            if (
                state.category === 'all' &&
                state.brand === 'all' &&
                state.color === 'all'
            ) {
                state.filterdProducts = [...state.products]
            } else if (
                state.category === 'all' &&
                state.color === 'all' &&
                state.brand !== 'all'
            ) {
                state.filterdProducts = state.products.filter(
                    (product) => product.brand === state.brand
                )
            } else if (
                state.brand === 'all' &&
                state.color === 'all' &&
                state.category !== 'all'
            ) {
                state.filterdProducts = state.products.filter(
                    (product) => product.category === state.category
                )
            } else if (
                state.brand === 'all' &&
                state.category === 'all' &&
                state.color !== 'all'
            ) {
                state.filterdProducts = state.products.filter((product) =>
                    product.colors.includes(state.color)
                )
            } else if (
                state.category === 'all' &&
                state.color !== 'all' &&
                state.brand !== 'all'
            ) {
                state.filterdProducts = state.products.filter(
                    (product) =>
                        product.brand === state.brand &&
                        product.colors.includes(state.color)
                )
            } else if (
                state.brand === 'all' &&
                state.color !== 'all' &&
                state.category !== 'all'
            ) {
                state.filterdProducts = state.products.filter(
                    (product) =>
                        product.category === state.category &&
                        product.colors.includes(state.color)
                )
            } else if (
                state.color === 'all' &&
                state.category !== 'all' &&
                state.brand !== 'all'
            ) {
                state.filterdProducts = state.products.filter(
                    (product) =>
                        product.category === state.category &&
                        product.brand === state.brand
                )
            } else {
                state.filterdProducts = state.products.filter(
                    (product) =>
                        product.category === state.category &&
                        product.brand === state.brand &&
                        product.colors.includes(state.color)
                )
            }
        },
        searchProducts: (state, action) => {
            action.payload.length !== 0
                ? (state.filterdProducts = state.products.filter((product) =>
                      product.name
                          .toLowerCase()
                          .includes(action.payload.toLowerCase())
                  ))
                : (state.filterdProducts = [...state.products])
        },
        toggleFreeShipping: (state, action) => {
            action.payload === true
                ? (state.filterdProducts = state.products.filter(
                      (product) => product.freeShipping === true
                  ))
                : (state.filterdProducts = [...state.products])
        },
        priceChange: (state, action) => {
            state.price = action.payload
            state.filterdProducts = state.products.filter(
                (product) => product.price <= action.payload
            )
        },
        clearFilters: (state, action) => {
            state.filterdProducts = [...state.products]
            state.category = 'all'
            state.brand = 'all'
            state.color = 'all'
            state.freeShipping = false
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
