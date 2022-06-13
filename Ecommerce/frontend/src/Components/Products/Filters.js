import React, { useState } from 'react';
import styles from './css/ProductCard.module.css';
import { productsState } from '../../Redux/Features/Products/ProductsSlice';
import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from 'react-debounce-input'
import { filteredProducts, searchProducts, toggleFreeShipping, clearFilters } from '../../Redux/Features/Products/ProductsSlice';

function Filters() {

  const dispatch = useDispatch() 
  const { searchText, freeShipping } = useSelector(productsState);
  const handleClick = (e) => {
    e.preventDefault()
    const category = e.target.value
    const name = e.target.name
    dispatch(filteredProducts({name:name, category}))
  }
  const handleSearchChange = (e) => {
      const text = e.target.value
      dispatch(searchProducts(text))
  }
  const handleCompanyChange = (e) => {
    const company = e.target.value
    const name = e.target.name
    dispatch(filteredProducts({name:name, company}))
  }
  const handleColorClick = (e) => {
    e.preventDefault()
    const name = e.target.name
    const color = e.target.getAttribute("data-color")
    dispatch(filteredProducts({name:name, color}))
  }
  const handleShippingClick = (e) => {
    dispatch(toggleFreeShipping())
  }
  const handleClearFilter = () => {
    dispatch(clearFilters())
  }
  return (<>
    <div className={styles.formContainer}> 
      <form className={styles.filtersForm} action=''>
        <div>
          <DebounceInput
          minLength={1}
          debounceTimeout={300}
          placeholder="search"
          value={searchText}
          onChange={handleSearchChange}
          />
        </div>

        <div>
          <h5 className={styles.h5}>Catagories</h5>
          <div className=' d-flex flex-column'>
            <button className={styles.filterBtns} name='category' value="all" onClick={handleClick}>
              {' '}
              All
            </button>
            <button className={styles.filterBtns} name='category' value="console" onClick={handleClick}>
              Console
            </button>
            <button className={styles.filterBtns} name='category' value="accessories" onClick={handleClick}>
              {' '}
              accessories
            </button>
          </div>
        </div>

        <div>
          <h5 className={styles.h5}>Companies</h5>
          <select
            name='company'
            id='companyID'
            className={styles.companySelect}
            onChange={handleCompanyChange}>
            <option value='all'>All</option>
            <option value='nintendo'>Ninitendo</option>
            <option value='sony'>Sony</option>
            <option value='microsoft'>Microsoft</option>
          </select>
        </div>
                <div className=''>
                    <h5 className={styles.h5}>Colors</h5>
                    <div className=' d-flex justify-content-between align-items-center '>
                        <button
                            className={` ${styles.filtersAll}`}
                            data-color='all'
                            name='color'
                            onClick={handleColorClick}
                        >
                            {' '}
                            All
                        </button>
                        <button
                            className={`${styles.filterColors} ${styles.filtersWhite}`}
                            data-color='#ffffff'
                            onClick={handleColorClick}
                            name='color'
                        ></button>
                        <button
                            className={`${styles.filterColors} ${styles.filtersBlack}`}
                            data-color='#000000'
                            onClick={handleColorClick}
                            name='color'></button>
                        <button
                            className={`${styles.filterColors} ${styles.filtersGrey}`}
                            data-color='#808080'
                            onClick={handleColorClick}
                            name='color'
                        ></button>
                    </div>
                </div>

                <div>
                    <h5 className={styles.h5}>Price</h5>
                    <p>$699.99</p>
                    <input type='range' />
                </div>

                <div className='d-flex justify-content-start align-items-center'>
                    <label htmlFor='shipping'>Free Shiping</label>
                    <input
                        className={styles.filtersCheckBox}
                        type='checkbox'
                        name='freeShipping'
                        id='shipping'
                        onChange={handleShippingClick}
                        checked={freeShipping}
                    ></input>
                </div>
                <div>
                    <button
                        className='clear-btn btn btn-danger mt-3'
                        type='button'
                        onClick={handleClearFilter}
                    >
                        Clear Filters
                    </button>
                </div>
            </form>
    </div>
    </>
  );
}

export default Filters
