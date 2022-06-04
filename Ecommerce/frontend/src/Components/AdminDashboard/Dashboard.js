import React from 'react';
import { Statistics, EarningData, ProductsData, OrdersData } from './';

function Dashboard({
  totalRevenue,
  ordersDataArray,
  productsDataArray,
  statisticsArray,
}) {
  return (
    <>
      <section className='bg-light py-4 m-2'>
        <Statistics StatisticsArray={statisticsArray} />
        <EarningData totalRevenue={totalRevenue} />
        <OrdersData ordersArray={ordersDataArray} />
        <ProductsData ProductsArray={productsDataArray} />
      </section>
    </>
  );
}

export default Dashboard;
