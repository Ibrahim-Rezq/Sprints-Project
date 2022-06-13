import React from 'react';
import { ProductCard } from './';
import styles from './css/ProductCard.module.css';

import { Loading } from '../Global';
import { useProductsContext } from '../../Context/ProductContext';

function ProductsGridVeiw() {
  const { filterdProducts, productsLoading } = useProductsContext();

  return (
    <div className={styles.procutsGridView}>
      {productsLoading ? (
        <Loading />
      ) : (
        filterdProducts.map((product) => {
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
