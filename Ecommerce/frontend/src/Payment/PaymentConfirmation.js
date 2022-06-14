import React from 'react';
import { formatPrice } from '../Utils/Helpers';
import classes from './css/PaymentConfirmation.module.css';

function PaymentConfirmation(props) {
  return (
    <>
      <section
        className=' d-flex justify-content-center align-items-center'
        style={{
          minHeight: 'calc(100vh - 80px)',
        }}>
        <div className='container mt-4'>
          <div className='alert alert-primary' role='alert'>
            Thank you for buying, Your payment for order #{props.order.number}{' '}
            done
          </div>
          <div className='user-details'>
            <h3>Payment Details</h3>
            <div className={classes.details + ' mx-4'}>
              <div className='name'>Name: {props.order.name}</div>
              <hr />
              <div className='address'>Address: {props.order.address}</div>
              <hr />
              <div className='phone'>Phone Number: {props.order.phone}</div>
              <hr />
              <div className='method'>
                Payment Method: {props.order.paymentMethod}
              </div>
              <hr />
              <div className='amount'>
                Paid Amount: {formatPrice(props.order.amount)}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentConfirmation;
