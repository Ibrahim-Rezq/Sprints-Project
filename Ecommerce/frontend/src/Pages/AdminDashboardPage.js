import React from 'react';
import {
  Dashboard,
  DashboardNav,
  OrdersData,
  ProductsData,
  ProductControles,
} from '../Components/AdminDashboard';
import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { adminState } from '../Redux/Features/Admin/AdminSlice';
import { productsState } from '../Redux/Features/Products/ProductsSlice';

function AdminDashboardPage() {
  const { totalRevenue, ordersArray, productsDataArray, statisticsArray } =
    useSelector(adminState);
  const { products } = useSelector(productsState);

  return (
    <>
      <section
        className=' bg-light position-relative p-3 m-3'
        style={{ minHeight: 'calc(100vh - 60px)' }}>
        <DashboardNav />
        <section className='container-lg  '>
          <Routes>
            <Route
              path='/'
              element={
                <Dashboard
                  {...{
                    totalRevenue,
                    ordersArray,
                    productsDataArray,
                    statisticsArray,
                  }}
                />
              }
            />
            <Route
              path='/orders'
              element={<OrdersData ordersArray={ordersArray} />}
            />
            <Route
              path='/products'
              element={<ProductsData ProductsArray={products} />}
            />
            <Route path='/ProductEdit/:id' element={<ProductControles />} />
          </Routes>
        </section>
      </section>
    </>
  );
}

export default AdminDashboardPage;
