import React from "react";
import FormInput from "../../Components/Global/FormInput";
import classes from "./css/CreditCard.module.css";

function CreditCardForm(props) {
  return (
    <div className={classes["cc-form"]}>
      <form>
        <div className={classes["row-elements"]}>
          <FormInput
            inputId="cc-name"
            label="Name on the card"
            inputType="text"
          ></FormInput>

          <FormInput
            inputId="cc-number"
            label="Card Number"
            inputType="number"
          ></FormInput>
        </div>

        <div className={classes["row-elements"]}>
          <FormInput
            inputId="cc-month"
            label="month"
            inputType="number"
          ></FormInput>

          <FormInput
            inputId="cc-year"
            label="Year"
            inputType="number"
          ></FormInput>

          <FormInput
            inputId="cc-year"
            label="CSV"
            inputType="number"
          ></FormInput>
        </div>
      </form>
    </div>
  );
}

export default CreditCardForm;
