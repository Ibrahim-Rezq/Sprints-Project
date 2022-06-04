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
import { useSelector, useDispatch } from 'react-redux';
import {
  getSingleProduct,
  productsState,
  getProducts,
} from '../Redux/Features/Products/ProductsSlice';
import { Link } from 'react-router-dom';

function SingleProductPage() {
  const { id } = useParams();
  const { product } = useSelector(productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <div className='container p-3'>
      <Link className='btn btn-danger btn-lg ' to='/products'>
        Back to products
      </Link>

      {product.id && (
        <div
          className='d-flex justify-content-around align-items-center '
          style={{ minHeight: 'calc(100vh - 60px)' }}>
          <ProductImagePreview images={product.images} />
          <div className='d-flex flex-column'>
            <ProductInfo product={product} />
            <AddToCartButtons />
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProductPage;
