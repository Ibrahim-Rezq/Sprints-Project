import React, { useEffect, useState } from 'react'
import styles from './css/ProductCard.module.css'
import { DebounceInput } from 'react-debounce-input'
import { useProductsContext } from '../../Context/ProductContext'
import { formatPrice } from '../../Utils/Helpers'
import { getUniqueValues } from '../../Utils/Helpers'

function Filters() {
    const {
        filterProducts,
        filtersClear,
        products,
        filters: { searchText, freeShipping, maxPrice, price },
    } = useProductsContext()

    const [filterValues, setFilterValues] = useState({
        categories: [],
        brands: [],
    })

    useEffect(() => {
        setFilterValues({
            categories: getUniqueValues(products, 'category'),
            brands: getUniqueValues(products, 'brand'),
        })
    }, [products])

    const handleClick = (e) => {
        const name = e.target.name
        if (name !== 'freeShipping') e.preventDefault()
        let value
        if (name === 'freeShipping') value = e.target.checked
        else value = e.target.value
        filterProducts({ name: name, [name]: value })
    }

    const handleClearFilter = () => {
        filtersClear()
    }

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
                            name={'searchText'}
                            onChange={handleClick}
                        />
                    </div>

                    <div>
                        <h5 className={styles.h5}>Catagories</h5>
                        <div className=' d-flex flex-column'>
                            {filterValues.categories.map((cat) => {
                                return (
                                    <button
                                        key={cat}
                                        className={
                                            styles.filterBtns +
                                            ' bg-light text-capitalize'
                                        }
                                        name='category'
                                        value={cat}
                                        onClick={handleClick}
                                    >
                                        {cat}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h5 className={styles.h5}>Brands</h5>
                        <select
                            name='brand'
                            id='brandID'
                            className={
                                styles.companySelect +
                                ' form-select text-capitalize'
                            }
                            onChange={handleClick}
                        >
                            {filterValues.brands.map((com) => {
                                return (
                                    <option key={com} value={com}>
                                        {com}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                        <h5 className={styles.h5}>Price</h5>
                        <p>{formatPrice(price)}</p>
                        <input
                            type='range'
                            min={0}
                            max={maxPrice}
                            value={price}
                            name={'price'}
                            onChange={handleClick}
                        />
                    </div>

                    <div className='d-flex justify-content-start align-items-center'>
                        <label htmlFor='shipping'>Free Shiping</label>
                        <input
                            className={styles.filtersCheckBox}
                            type='checkbox'
                            name='freeShipping'
                            id='shipping'
                            onChange={handleClick}
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
    )
}

export default Filters
