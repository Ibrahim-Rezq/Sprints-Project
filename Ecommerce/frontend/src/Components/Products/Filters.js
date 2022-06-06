import React from 'react'
import styles from "./Products.module.css";


function Filters() {
    return <div className={styles.formContainer}>
<form className={styles.filtersForm} action="">
    <div>
  <input type="text"  placeholder='search' className={styles.searchImput}/>  
   </div> 

    <div>
        <h5 className={styles.h5}>Catagories</h5>
        <div  className=' d-flex flex-column'>
            <button className={styles.filterBtns}  name='category' > All</button>
            <button className={ styles.filterBtns}  name='category'>Console</button>
            <button className={ styles.filterBtns}  name='category'> accessories</button>
        </div>
    </div>

    <div>
    <h5 className={styles.h5} >Companies</h5>
       <select name="company" id="companyID" className={styles.companySelect}>
       <option value="all">All</option>
       <option value="nintendo">Ninitendo</option>
       <option value="sony">Sony</option>
       <option value="microsoft">Microsoft</option>
       </select>
    </div>

    <div className=''>
    <h5  className={styles.h5}>Colors</h5>
        <div  className=' d-flex justify-content-between align-items-center '>
        <button className={` ${styles.filtersAll}`}  name='color'> All</button>
            <button className={ `${styles.filterColors} ${styles.filtersWhite}`} data-color="#ffffff"  name='color' ></button>
            <button className={ `${styles.filterColors} ${styles.filtersBlack}` }  name='color'></button>
            <button className={  `${styles.filterColors} ${styles.filtersGrey}`}  name='color'></button>
            
        </div>
    </div>

    <div>
<h5 className={styles.h5}>Price</h5>
<p>$699.99</p>
<input type="range" />
    </div>

    <div className='d-flex justify-content-start align-items-center'>
    <label  for="shipping">Free Shiping</label>
    <input className={styles.filtersCheckBox}  type="checkbox" name="shipping" id="shipping"></input>
    </div>
   <div>
    <button className='btn btn-danger mt-3' type="button" class="clear-btn">Clear Filters</button>
    </div>
</form>


    </div>
}

export default Filters
