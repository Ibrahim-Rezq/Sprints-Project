import React from 'react';
import { Filters, ProductsGridVeiw } from '../Components/Products';

const ProductsPage = () => {
  return (
    <section className='d-flex justify-content-center align-items-center text-light'>
      <section className='container-md row my-4'>
        <article className='col-12 col-sm-4 col-lg-3'>
          <Filters />
        </article>
        <article className='col-12 col-sm mt-4'>
          <ProductsGridVeiw />
        </article>
      </section>
    </section>
  );
};

export default ProductsPage;
