import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProductsBegin,
  getProductsSucsses,
  getOnSaleProducts,
  getFeaturedProducts,
  getProductsError,
  getSingleProductBegin,
  getSingleProductSucsses,
  getSingleProductError,
  filteredProducts,
  searchProducts,
  productsState,
} from '../Redux/Features/Products/ProductsSlice';

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const state = useSelector(productsState);
  const dispatch = useDispatch();

  const fetchProducts = async (url) => {
    // try {
    dispatch(getProductsBegin());
    // const response = await axios.get('http://127.0.0.1:8000/products/');
    // console.log(response);
    setTimeout(() => {
      dispatch(getProductsSucsses());
    }, 0);
    // } catch {
    // dispatch(getProductsError());
    // }
  };

  const fetchSingleProduct = async (url) => {
    // try {
    dispatch(getSingleProductBegin());
    //   const response = await axios.get(url);
    dispatch(getSingleProductSucsses(url));
    // } catch {
    // dispatch(getSingleProductError());
    // }
  };
  // urlSingle
  useEffect(() => {
    fetchProducts('url');
  }, []);
  useEffect(() => {
    dispatch(getOnSaleProducts());
    dispatch(getFeaturedProducts());
  }, [state.products]);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
