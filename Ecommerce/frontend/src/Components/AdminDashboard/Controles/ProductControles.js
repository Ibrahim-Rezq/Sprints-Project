import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ControlesFormInput } from '../';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  getSingleProduct,
  productsState,
  getProducts,
} from '../../../Redux/Features/Products/ProductsSlice';

const ProductControles = () => {
  const { id } = useParams();

  const { product } = useSelector(productsState);
  const dispatch = useDispatch();

  const [tempProduct, setTempProduct] = useState(product);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getSingleProduct(id));
    setTempProduct();
  }, []);

  useEffect(() => {
    setTempProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTempProduct({ ...tempProduct, [name]: value });
  };

  return (
    <div className='container'>
      <form action=''>
        <ControlesFormInput
          inputId='formProductName'
          inputName='name'
          inputType='text'
          inputLabel='ProductName'
          inputText=''
          inputValue={tempProduct.name}
          inputFunc={handleChange}
        />
        <hr />
        <ControlesFormInput
          inputId='formProductPrice'
          inputName='price'
          inputType='number'
          inputLabel='ProductPrice'
          inputText='in Cents'
          inputValue={tempProduct.price}
          inputFunc={handleChange}
        />
        <hr />
        <ControlesFormInput
          inputId='formProductCompany'
          inputName='company'
          inputType='text'
          inputLabel='ProductCompany'
          inputText=''
          inputValue={tempProduct.company}
          inputFunc={handleChange}
        />
        <hr />
        <ControlesFormInput
          inputId='formProductCategory'
          inputName='category'
          inputType='text'
          inputLabel='ProductCategory'
          inputText=''
          inputValue={tempProduct.category}
          inputFunc={handleChange}
        />
        <hr />
      </form>
    </div>
  );
};

export default ProductControles;
