import React from 'react';
import PaymentConfirmation from '../Payment/PaymentConfirmation';

const DUMMY_ORDER = {
  number: '33577892',
  paymentMethod: 'Credit Card',
  name: 'Seif Omran',
  address: 'Obour City',
  phone: '01099662420',
  amount: 109.9,
};

function PaymentConfirmationPage() {
  return <PaymentConfirmation order={DUMMY_ORDER}></PaymentConfirmation>;
}

export default PaymentConfirmationPage;
