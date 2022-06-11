import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../Utils/Constant';

const initialState = {
  category: 'all',
  company: 'all',
  searchText: '',
  // ^ filters
  products: [],
  productsLoading: false,
  productsError: false,
  featuredProducts: [],
  onSaleProducts: [],
  singleProduct: {},
  singleProductLoading: false,
  singleProductError: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getSingleProductBegin: (state) => {
      state.singleProductLoading = true;
      state.singleProductError = false;
    },
    getSingleProductSucsses: (state, action) => {
      state.singleProduct = state.products.filter((product) => {
        return product.id === action.payload;
      })[0];
      state.singleProductLoading = false;
      state.singleProductError = false;
    },
    getSingleProductError: (state) => {
      state.singleProductLoading = false;
      state.singleProductError = true;
    },

    getFeaturedProducts: (state) => {
      state.featuredProducts = [
        ...state.products.filter((prod) => prod.featured),
      ];
    },
    getOnSaleProducts: (state) => {
      state.onSaleProducts = [...state.products.filter((prod) => prod.onSale)];
    },
    getProductsBegin: (state) => {
      state.productsLoading = true;
      state.productsError = false;
    },
    getProductsSucsses: (state) => {
      state.products = [...Product];
      state.productsLoading = false;
      state.productsError = false;
    },
    getProductsError: (state) => {
      state.productsLoading = false;
      state.productsError = true;
    },
    filteredProducts: (state, action) => {
      const object = action.payload.name;
      state[object] = action.payload[object];
      state.products = [...Product];
      if (state.category === 'all' && state.company === 'all') {
        state.products = [...Product];
      } else if (state.category === 'all' && state.company !== 'all') {
        state.products = state.products.filter(
          (product) => product.company === state.company
        );
      } else if (state.company === 'all' && state.category !== 'all') {
        state.products = state.products.filter(
          (product) => product.category === state.category
        );
      } else {
        state.products = state.products.filter(
          (product) =>
            product.category === state.category &&
            product.company === state.company
        );
      }
    },
    searchProducts: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  getSingleProductBegin,
  getSingleProductSucsses,
  getSingleProductError,
  getOnSaleProducts,
  getFeaturedProducts,
  getProductsBegin,
  getProductsSucsses,
  getProductsError,
  filteredProducts,
  searchProducts,
} = productsSlice.actions;
export const productsState = (state) => state.products;

export default productsSlice.reducer;
