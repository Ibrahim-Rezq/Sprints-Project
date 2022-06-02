import React from "react";
import OrderReview from "./OrderReview";
import PaymentForm from "../../Payment/PaymentForm";
import ShippingDetails from "../Shipping/ShippingDetails";

import classes from "./css/ProceedToCheckout.module.css";

function ProcedeToCheckOut() {
  let DUMMY_DATA = [
    {
      title: "Product 1",
      price: 100,
    },
    {
      title: "Product 2",
      price: 300,
    },
  ];

  return (
    <div className="container mt-5">
      <div className={classes["checkout-wrapper"]}>
        <div className={classes["left-wrapper"]}>
          <h2>Shipping Details</h2>
          <div id="shipping-details">
            <ShippingDetails></ShippingDetails>
          </div>
          <h2>Payment Details</h2>
          <div id="checkout" className={classes.checkout}>
            <div className={classes["payment-process"]}>
              <PaymentForm></PaymentForm>
            </div>
          </div>
        </div>
        <div className={classes["right-wrapper"]}>
          <OrderReview products={DUMMY_DATA}></OrderReview>
        </div>
      </div>
    </div>
  );
}

export default ProcedeToCheckOut;
