import React from 'react';
import { OrdersContent } from '../Components/Orders';

function OrdersPage() {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: 'calc(100vh - 60px)' }}>
      <OrdersContent />
    </div>
  );
}

export default OrdersPage;
