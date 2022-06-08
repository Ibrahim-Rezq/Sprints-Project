import React, { useEffect } from 'react'
import { ProductCard } from './'
import styles from './css/ProductCard.module.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
    getSingleProduct,
    productsState,
    getProducts,
} from '../../Redux/Features/Products/ProductsSlice'
import { Loading } from '../Global'
import { getUniqueValues } from '../../Utils/Helpers'

function ProductsGridVeiw(props) {
  const { products, searchText } = useSelector(productsState);
  const dispatch = useDispatch();
  const filteredSearch = () => (
    searchText.length === 0 ?
    products
    :
    products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
  )
 
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.procutsGridView}>
      {products && products.length > 0 ? (
        filteredSearch().map((product) => {
          return (
            <div className={styles.productGridView}>
              <ProductCard Product={product}/>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductsGridVeiw
