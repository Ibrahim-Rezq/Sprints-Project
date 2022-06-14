import React, { useState } from 'react';
import ProcedeToCheckOut from '../Components/Cart/ProcedeToCheckOut';
import PaymentConfirmation from '../Payment/PaymentConfirmation';
import { Route, Routes } from 'react-router-dom';
import { ProtectedLinks } from '../Components/Global';
function CheckOutPage() {
  const [formData, setFormData] = useState({
    number: '33577892',
    paymentMethod: 'Credit Card',
    name: 'Seif Omran',
    address: 'Obour City',
    phone: '01099662420',
    amount: 10999,
  });
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProcedeToCheckOut formData={formData} setFormData={setFormData} />
        }
      />
      <Route
        path='/confirmation'
        element={<PaymentConfirmation order={formData} />}
      />
    </Routes>
  );
}

export default CheckOutPage;
