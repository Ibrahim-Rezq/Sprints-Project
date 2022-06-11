import React, { useEffect } from 'react';
import { useParams } from 'react-router';

// Components
import {
  ProductImagePreview,
  ProductReviews,
  ProductInfo,
} from '../Components/SingleProduct';
import { AddToCartButtons } from '../Components/Products';

// Redux
import { Link } from 'react-router-dom';
import { useProductsContext } from '../Context/ProductContext';

function SingleProductPage() {
  const { id } = useParams();
  const {
    singleProduct,
    singleProductLoading,
    productsLoading,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  return (
    <div className='container'>
      <Link className='btn btn-danger btn-lg mt-4' to='/products'>
        Back to products
      </Link>

      {!productsLoading && !singleProductLoading && (
        <div
          className='d-flex justify-content-evenly flex-wrap align-items-center '
          style={{ minHeight: '80vh' }}>
          <ProductImagePreview images={singleProduct.images} />
          <ProductInfo product={singleProduct} />
        </div>
      )}
    </div>
  );
}

export default SingleProductPage;
