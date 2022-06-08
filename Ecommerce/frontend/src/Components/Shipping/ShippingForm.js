import React from 'react';
import { FormInput } from '../Global/';
import style from './css/ShippingForm.module.css';

function ShippingForm(props) {
  return (
    <form className='mb-4'>
      <div className='row'>
        <div
          className={'d-flex justify-content-between ' + style['name-inputs']}>
          <FormInput
            inputType='text'
            inputId='shipping-fname'
            label='First Name'></FormInput>
          <FormInput
            inputType='text'
            inputId='shipping-lname'
            label='Last Name'></FormInput>
        </div>

        <FormInput
          inputType='text'
          inputId='shipping-address'
          label='address'></FormInput>
        <FormInput
          inputType='text'
          inputId='shipping-notes'
          label='Shipping Notes'></FormInput>
      </div>
    </form>
  );
}

export default ShippingForm;
