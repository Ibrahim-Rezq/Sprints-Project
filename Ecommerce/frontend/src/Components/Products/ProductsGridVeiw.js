import React from 'react';
import { ProductCard } from './';
import styles from './css/ProductCard.module.css';

import { Loading } from '../Global';
import { useProductsContext } from '../../Context/ProductContext';

function ProductsGridVeiw() {
  const { filterdProducts, productsLoading } = useProductsContext();

  return (
    <div className='row'>
      {productsLoading ? (
        <Loading />
      ) : (
        filterdProducts.map((product) => {
          return (
            <div className='col-12 col-md-6 col-lg-4'>
              <ProductCard Product={product} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProductsGridVeiw;
