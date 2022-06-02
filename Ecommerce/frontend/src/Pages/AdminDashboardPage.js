import React from 'react'
import { Dashboard } from '../Components'
import DashboardNav from '../Components/AdminDashboard/DashboardNav'
import { Route, Routes } from 'react-router-dom'

import OrdersData from '../Components/AdminDashboard/OrdersData'
import ProductsData from '../Components/AdminDashboard/ProductsData'
import { useDispatch, useSelector } from 'react-redux'
import { totalRevenueData } from '../Redux/Features/Admin/AdminSlice'
import {
    ordersDataArray,
    ProductsDataArray,
    StatisticsArray,
} from '../Utils/Constant'
function AdminDashboardPage() {
    const revenueArray = useSelector(totalRevenueData)

    return (
        <>
            <section
                className=' bg-light position-relative'
                style={{ minHeight: 'calc(100vh - 60px)' }}
            >
                <DashboardNav />
                {/* d-flex justify-content-center align-items-center */}
                <section className='container-lg  '>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route
                            path='/orders'
                            element={
                                <OrdersData ordersArray={ordersDataArray} />
                            }
                        />
                        <Route
                            path='/products'
                            element={
                                <ProductsData
                                    ProductsArray={ProductsDataArray}
                                />
                            }
                        />
                    </Routes>
                </section>
            </section>
        </>
    )
}

export default AdminDashboardPage
