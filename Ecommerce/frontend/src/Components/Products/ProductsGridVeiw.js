import React, { useEffect } from 'react';
import { ProductCard } from './';
import styles from './css/ProductCard.module.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { productsState } from '../../Redux/Features/Products/ProductsSlice';
import { Loading } from '../Global';
import { getUniqueValues } from '../../Utils/Helpers';
import { useProductsContext } from '../../Context/ProductContext';

function ProductsGridVeiw(props) {
  const { searchText } = useSelector(productsState);
  const { products, productsLoading } = useProductsContext();
  const filteredSearch = () =>
    searchText.length === 0
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div className={styles.procutsGridView}>
      {productsLoading ? (
        <Loading />
      ) : (
        filteredSearch().map((product) => {
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
