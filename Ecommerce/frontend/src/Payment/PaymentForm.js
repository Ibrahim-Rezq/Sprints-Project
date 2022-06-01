import React from "react";
import CreditCardForm from "./methods/CreditCardForm";
import classes from './css/PaymentForm.module.css'

function PaymentForm(props) {
  return (
    <div className="payment-form">
      <div className="payment-methods">
      <span>Choose your payment method </span>
        <select className="mb-4"> 
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Pay at delivery</option>
        </select>
        <div className="methods">
          <CreditCardForm></CreditCardForm>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
