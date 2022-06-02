import React from 'react'
import ProductCard from './ProductCard'
import Filters from './Filters'
import { Products } from '../../Utils/Constant'
import styles from "./ProductCard.module.css";

function ProductsGridVeiw() {
    return (
    <div className='d-flex justify-content-evenly'>
         <div className=''>
       <Filters/>
       </div>
        <div className={styles.procutsGridView}>
            {Products.map((product) => {
                return <div className={styles.productGridView}>
                    <ProductCard Product={product} />
                   </div>
        })}
              </div>
       
        </div>
        
    )
}

export default ProductsGridVeiw
