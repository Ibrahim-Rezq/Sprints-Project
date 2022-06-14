import React, { useState } from 'react';
import OrderReview from './OrderReview';
import PaymentForm from '../../Payment/PaymentForm';
import { ShippingDetails } from '../Shipping';

import classes from './css/ProceedToCheckout.module.css';

function ProcedeToCheckOut({ formData, setFormData }) {
  return (
    <section
      className=' d-flex justify-content-center align-items-center '
      style={{
        minHeight: 'calc(100vh - 80px)',
      }}>
      {' '}
      <div className='container mt-5'>
        <div className={classes['checkout-wrapper'] + ' row'}>
          <div className={classes['left-wrapper'] + ' col-xs-12 col-md-8'}>
            <h2>Shipping Details</h2>
            <div id='shipping-details'>
              <ShippingDetails></ShippingDetails>
            </div>
            <h2>Payment Details</h2>
            <div id='checkout' className={classes.checkout}>
              <div className={classes['payment-process']}>
                <PaymentForm formData={formData} setFormData={setFormData} />
              </div>
            </div>
          </div>
          <div className={classes['right-wrapper'] + ' col-xs-12 col-md-4'}>
            <OrderReview />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcedeToCheckOut;
