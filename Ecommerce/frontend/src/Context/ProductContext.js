import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  productsState,
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
} from '../Redux/Features/Products/ProductsSlice';

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const state = useSelector(productsState);
  const dispatch = useDispatch();

  const filterProducts = (obj) => {
    dispatch(filteredProducts(obj));
  };
  const search = (text) => {
    dispatch(searchProducts(text));
  };

  const filtersClear = () => {
    dispatch(clearFilters());
  };
  const freeShippingToggle = (val) => {
    dispatch(toggleFreeShipping(val));
  };
  const changePrice = (value) => {
    dispatch(priceChange(value));
  };
  const fetchProducts = async () => {
    // try {
    dispatch(getProductsBegin());
    // const response = await axios.get('http://127.0.0.1:8000/products/');
    // console.log(response.data);
    // dispatch(getProductsSucsses(response.data));
    setTimeout(() => {
      dispatch(getProductsSucsses());
    }, 0);
    // } catch {
    // dispatch(getProductsError());
    // }
  };

  const fetchSingleProduct = async (id) => {
    // try {
    dispatch(getSingleProductBegin());
    // const res = await axios.get(`http://127.0.0.1:8000/products/${id}`);
    // console.log(res.data);
    // dispatch(getSingleProductSucsses(res.data));
    dispatch(getSingleProductSucsses());
    // } catch {
    // dispatch(getSingleProductError());
    // }
  };
  // urlSingle
  useEffect(() => {
    fetchProducts('url');
  }, []);

  useEffect(() => {
    dispatch(initProductsData());
  }, [state.products]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        filterProducts,
        search,
        filtersClear,
        freeShippingToggle,
        fetchSingleProduct,
        changePrice,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
