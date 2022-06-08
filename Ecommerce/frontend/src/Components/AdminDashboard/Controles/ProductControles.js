import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  getSingleProduct,
  productsState,
  getProducts,
  updateSingleProduct,
} from '../../../Redux/Features/Products/ProductsSlice';
import { getUniqueValues } from '../../../Utils/Helpers';
import { ColorChange, ImagesChange } from '../';

const ProductControles = () => {
  const { id } = useParams();
  const colorsInput = useRef(null);

  const { product, products } = useSelector(productsState);
  const dispatch = useDispatch();

  const [tempProduct, setTempProduct] = useState(product);
  /*
    images:[{...},{...},{...},{...},{...}]
    colors: ['#000000', '#ffffff'], 12964
*/
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getSingleProduct(id));
    setTempProduct();
  }, []);

  //   useEffect(() => {
  //     console.log(tempProduct);
  //   }, [tempProduct]);
  //   useEffect(() => {
  //     console.log(getUniqueValues(products, 'category'));
  //   }, [products]);
  useEffect(() => {
    setTempProduct(product);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSingleProduct(tempProduct));
  };

  const handleColorChange = (colorsArr) => {
    setTempProduct({ ...tempProduct, colors: colorsArr });
  };

  const handleImageChange = (colorsArr) => {
    setTempProduct({ ...tempProduct, images: colorsArr });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'shipping' || name === 'featured') {
      setTempProduct({ ...tempProduct, [name]: e.target.checked });
    }
    if (value && value !== undefined)
      setTempProduct({ ...tempProduct, [name]: value });
  };

  return (
    <div className='container'>
      {tempProduct.id && (
        <form onSubmit={handleSubmit}>
          <ColorChange
            handleColorChange={handleColorChange}
            colorArr={tempProduct.colors}
          />
          <ImagesChange
            handleImageChange={handleImageChange}
            imageArr={tempProduct.images}
          />
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
            inputId='formProductStock'
            inputName='stock'
            inputType='number'
            inputLabel='ProductStock'
            inputText=''
            inputValue={tempProduct.stock}
            inputFunc={handleChange}
          />
          <hr />
          <div className=''>
            <label className='form-label' htmlFor='formProductDescription'>
              Product Description
            </label>
            <textarea
              className='form-control'
              name='description'
              id='formProductDescription'
              value={tempProduct.description}
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <label className='form-label' htmlFor='ProductCompany'>
              Product Company
            </label>
            <select
              className='form-select'
              id='ProductCompany'
              aria-label='ProductCompany'
              name='company'
              defaultValue={tempProduct.company}
              onChange={handleChange}>
              <option defaultValue>Select Product Company</option>
              <option value='nentindo'>nentindo</option>
              <option value='microsoft'>microsoft</option>
              <option value='sony'>sony</option>
            </select>
          </div>
          <hr />
          <div>
            <label className='form-label' htmlFor='ProductCategory'>
              Product Category
            </label>
            <select
              className='form-select'
              id='ProductCategory'
              aria-label='ProductCategory'
              name='category'
              defaultValue={tempProduct.category}
              onChange={handleChange}>
              <option defaultValue>Select Product Category</option>
              <option value='nentindo'>nentindo</option>
              <option value='microsoft'>microsoft</option>
              <option value='sony'>sony</option>
            </select>
          </div>
          <hr />
          <div>
            <input
              className='form-check-input me-2 mt-2'
              type='checkbox'
              id='featured'
              name='featured'
              defaultChecked={tempProduct.featured}
              onChange={handleChange}
            />
            <label className='form-label lead' htmlFor='featured'>
              Featured
            </label>
          </div>
          <div>
            <input
              className='form-check-input me-2 mt-2'
              type='checkbox'
              id='shipping'
              name='shipping'
              value='true'
              defaultChecked={tempProduct.shipping}
              onChange={handleChange}
            />
            <label className='form-label lead' htmlFor='shipping'>
              Shipping
            </label>
          </div>
          <hr />
          <button className='btn-outline-dark btn' type='submit'>
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

const ControlesFormInput = ({
  inputId,
  inputName,
  inputType,
  inputLabel,
  inputText,
  inputValue,
  inputFunc,
}) => {
  return (
    <div className=''>
      <label className='form-label' htmlFor={inputId}>
        {inputLabel}
      </label>
      <input
        className='form-control'
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={inputFunc}
        id={inputId}
      />
      {inputText && <p className='form-text'>{inputText}</p>}
    </div>
  );
};

export default ProductControles;
