import React from 'react';
import { ProductCard } from './';
import styles from './css/ProductCard.module.css';

// Redux
import { useSelector } from 'react-redux';
import { productsState } from '../../Redux/Features/Products/ProductsSlice';
import { Loading } from '../Global';
// import { getUniqueValues } from '../../Utils/Helpers';
import { useProductsContext } from '../../Context/ProductContext';

function ProductsGridVeiw() {
  const { searchText, freeShipping } = useSelector(productsState);
  const { products, productsLoading } = useProductsContext();
  const filteredSearch = () =>
    searchText.length === 0
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        );
  const filterFreeShipping = () => (
    freeShipping === true ? 
    filteredSearch().filter((product) =>  product.shipping === true )
    :
    filteredSearch()
  )
        
  return (
    <div className={styles.procutsGridView}>
      {productsLoading ? (
        <Loading />
      ) : (
        filterFreeShipping().map((product) => {
          return (
            <div className={styles.productGridView}>
              <ProductCard Product={product} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProductsGridVeiw;
