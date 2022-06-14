import React from 'react';
import FormInput from '../../Components/Global/FormInput';
import classes from './css/CreditCard.module.css';
import { Link } from 'react-router-dom';

function CreditCardForm(props) {
  return (
    <div className={classes['cc-form']}>
      <form>
        <div className={classes['row-elements']}>
          <FormInput
            inputId='cc-name'
            label='Name on the card'
            inputType='text'></FormInput>

          <FormInput
            inputId='cc-number'
            label='Card Number'
            inputType='number'></FormInput>
        </div>

        <div className={classes['row-elements']}>
          <FormInput
            inputId='cc-month'
            label='month'
            inputType='number'></FormInput>

          <FormInput
            inputId='cc-year'
            label='Year'
            inputType='number'></FormInput>

          <FormInput
            inputId='cc-year'
            label='CSV'
            inputType='number'></FormInput>
        </div>
        <Link to='confirmation' className='btn btn-danger m-auto'>
          Conform Order
        </Link>
      </form>
    </div>
  );
}

export default CreditCardForm;
