import { createSlice } from '@reduxjs/toolkit';
import { Products, Product } from '../../../Utils/Constant';

const initialState = {
  products: [],
  product: {},
  category:'all',
  company:'all',
  searchText:'',
  featuredProducts: [],
  onSaleProducts: [],
  // this will be used once connected to database
  productsLoading: false,
  productsError: false,
  //
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getSingleProduct: (state, action) => {
      state.productsLoading = false;
      state.product =
        Product.filter((product) => {
          return product.id === action.payload;
        })[0] || {};
      state.productsLoading = true;
    },
    getFeaturedProducts: (state) => {
      if (state.products.length > 0)
        state.featuredProducts = [...Products.filter((prod) => prod.featured)];
    },
    getOnSaleProducts: (state) => {
      if (state.products.length > 0)
        state.onSaleProducts = [...Products.filter((prod) => prod.onSale)];
    },
    getProducts: (state) => {
      if (state.products.length <= 0) state.products = [...Products];
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateSingleProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, ...action.payload };
        } else return product;
      });
    },
    filteredProducts: (state, action) => {
      const object = action.payload.name
      state[object] = action.payload[object]
      state.products = [...Products]
      if(state.category === 'all' && state.company === 'all'){
        state.products = [...Products]
      }
      else if(state.category === 'all' && state.company !== 'all'){
        state.products = state.products.filter((product) => product.company === state.company )
      }
      else if(state.company === 'all' && state.category !== 'all'){
        state.products = state.products.filter((product) => product.category === state.category )
      }
      else{
        state.products = state.products.filter((product) => product.category === state.category && product.company === state.company )
      }
    },
    searchProducts: (state, action) => {
      state.searchText = action.payload
    }
  },
});


export const {
  addProduct,
  getSingleProduct,
  getOnSaleProducts,
  getFeaturedProducts,
  getProducts,
  updateSingleProduct,
  updateProduct, 
  filteredProducts, 
  searchProducts
} = productsSlice.actions;
export const productsState = (state) => state.products;

export default productsSlice.reducer;
