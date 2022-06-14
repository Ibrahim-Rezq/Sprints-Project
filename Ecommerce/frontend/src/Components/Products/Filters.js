import React, { useEffect, useState } from 'react';
import styles from './css/ProductCard.module.css';
import { DebounceInput } from 'react-debounce-input';
import { useProductsContext } from '../../Context/ProductContext';
import { formatPrice } from '../../Utils/Helpers';
import { getUniqueValues } from '../../Utils/Helpers';

function Filters() {
  const {
    filterProducts,
    freeShippingToggle,
    filtersClear,
    search,
    searchText,
    maxPrice,
    price,
    changePrice,
    products,
    color: stateColor,
  } = useProductsContext();

  const [filterValues, setFilterValues] = useState({
    categories: [],
    companies: [],
    colors: [],
  });

  useEffect(() => {
    setFilterValues({
      categories: getUniqueValues(products, 'category'),
      companies: getUniqueValues(products, 'company'),
      colors: getUniqueValues(products, 'colors'),
    });
  }, [products]);

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value;
    if (name === 'color') value = e.target.getAttribute('data-color');
    else value = e.target.value;
    filterProducts({ name: name, [name]: value });
  };

  const handleSearchChange = (e) => {
    search(e.target.value);
  };
  const handleShippingClick = (e) => {
    freeShippingToggle(e.target.checked);
  };
  const handleClearFilter = () => {
    filtersClear();
  };
  const handlePriceChange = (e) => {
    changePrice(e.target.value);
  };

  return (
    <>
      <div className={styles.formContainer + ' text-dark'}>
        <form className={styles.filtersForm} action=''>
          <div>
            <DebounceInput
              minLength={1}
              debounceTimeout={300}
              placeholder='search'
              className='form-control'
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>

          <div>
            <h5 className={styles.h5}>Catagories</h5>
            <div className=' d-flex flex-column'>
              {filterValues.categories.map((cat) => {
                return (
                  <button
                    className={styles.filterBtns + ' bg-light'}
                    name='category'
                    value={cat}
                    onClick={handleClick}>
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h5 className={styles.h5}>Companies</h5>
            <select
              name='company'
              id='companyID'
              className={styles.companySelect}
              onChange={handleClick}>
              {filterValues.companies.map((com) => {
                return <option value={com}> {com}</option>;
              })}
            </select>
          </div>
          <div className=''>
            <h5 className={styles.h5}>Colors</h5>
            <div className=' d-flex justify-content-between align-items-center '>
              {filterValues.colors.map((clr) => {
                return clr == 'all' ? (
                  <button
                    className={` ${styles.filtersAll}`}
                    data-color={clr}
                    name='color'
                    onClick={handleClick}>
                    {clr}
                  </button>
                ) : (
                  <button
                    className={`${styles.filterColors}`}
                    style={{ background: clr == stateColor ? clr : clr + 'af' }}
                    data-color={clr}
                    onClick={handleClick}
                    name='color'
                  />
                );
              })}
            </div>
          </div>

          <div>
            <h5 className={styles.h5}>Price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type='range'
              min={0}
              max={maxPrice}
              value={price}
              onChange={handlePriceChange}
            />
          </div>

          <div className='d-flex justify-content-start align-items-center'>
            <label htmlFor='shipping'>Free Shiping</label>
            <input
              className={styles.filtersCheckBox}
              type='checkbox'
              name='freeShipping'
              id='shipping'
              onChange={handleShippingClick}></input>
          </div>
          <div>
            <button
              className='clear-btn btn btn-danger mt-3'
              type='button'
              onClick={handleClearFilter}>
              Clear Filters
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Filters;
