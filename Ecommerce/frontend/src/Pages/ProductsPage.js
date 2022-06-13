import React from 'react';
import { Filters, ProductsGridVeiw } from '../Components/Products';

const ProductsPage = () => {
  return (
    <section
      style={{ background: 'var(--bs-gray-800)' }}
      className='d-flex justify-content-center align-items-center text-light'>
      <section className='container-md d-flex justify-content-center p-3 m-3'>
        <Filters />
        <ProductsGridVeiw />
      </section>
    </section>
  );
};

export default ProductsPage;
