// import React from 'react';
// import styles from './css/ProductCard.module.css';
// import { useDispatch } from "react-redux";
// import { DebounceInput } from 'react-debounce-input'
// import { filteredProducts, searchProducts } from '../../Redux/Features/Products/ProductsSlice';

// function Filters() {
//   const dispatch = useDispatch() 
//   const handleClick = (e) => {
//     e.preventDefault()
//     const category = e.target.value
//     dispatch(filteredProducts({name:"category", category}))
//   }
//   const handleSearchChange = (e) => {
//       const text = e.target.value
//       dispatch(searchProducts(text))
//   }
//   const handleCompanyChange = (e) => {
//     const company = e.target.value
//     dispatch(filteredProducts({name:"company", company}))
//   }
//   return (<>
//     <div className={styles.formContainer}>
//       <form className={styles.filtersForm} action=''>
//         <div>
//           <DebounceInput
//           minLength={1}
//           debounceTimeout={300}
//           placeholder="search"
//           onChange={handleSearchChange}
//           />
//         </div>

//         <div>
//           <h5 className={styles.h5}>Catagories</h5>
//           <div className=' d-flex flex-column'>
//             <button className={styles.filterBtns} name='category' value="all" onClick={handleClick}>
//               {' '}
//               All
//             </button>
//             <button className={styles.filterBtns} name='category' value="console" onClick={handleClick}>
//               Console
//             </button>
//             <button className={styles.filterBtns} name='category' value="accessories" onClick={handleClick}>
//               {' '}
//               accessories
//             </button>
//           </div>
//         </div>

//         <div>
//           <h5 className={styles.h5}>Companies</h5>
//           <select
//             name='company'
//             id='companyID'
//             className={styles.companySelect}
//             onChange={handleCompanyChange}>
//             <option value='all'>All</option>
//             <option value='nintendo'>Ninitendo</option>
//             <option value='sony'>Sony</option>
//             <option value='microsoft'>Microsoft</option>
//           </select>
//         </div>

//                 <div className=''>
//                     <h5 className={styles.h5}>Colors</h5>
//                     <div className=' d-flex justify-content-between align-items-center '>
//                         <button
//                             className={` ${styles.filtersAll}`}
//                             name='color'
//                         >
//                             {' '}
//                             All
//                         </button>
//                         <button
//                             className={`${styles.filterColors} ${styles.filtersWhite}`}
//                             data-color='#ffffff'
//                             name='color'
//                         ></button>
//                         <button
//                             className={`${styles.filterColors} ${styles.filtersBlack}`}
//                             name='color'></button>
//                         <button
//                             className={`${styles.filterColors} ${styles.filtersGrey}`}
//                             name='color'
//                         ></button>
//                     </div>
//                 </div>

//                 <div>
//                     <h5 className={styles.h5}>Price</h5>
//                     <p>$699.99</p>
//                     <input type='range' />
//                 </div>

//                 <div className='d-flex justify-content-start align-items-center'>
//                     <label htmlFor='shipping'>Free Shiping</label>
//                     <input
//                         className={styles.filtersCheckBox}
//                         type='checkbox'
//                         name='shipping'
//                         id='shipping'
//                     ></input>
//                 </div>
//                 <div>
//                     <button
//                         className='clear-btn btn btn-danger mt-3'
//                         type='button'
//                     >
//                         Clear Filters
//                     </button>
//                 </div>
//             </form>
//           <button
//             className='btn btn-danger mt-3 clear-btn'
//             type='button'
//             >
//             Clear Filters
//           </button>
//     </div>
//     </>
//   );
// }

// export default Filters
