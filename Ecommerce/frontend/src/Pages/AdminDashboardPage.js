import React from 'react'
import { Dashboard } from '../Components'
import DashboardNav from '../Components/AdminDashboard/DashboardNav'
import { Route, Routes } from 'react-router-dom'

import OrdersData from '../Components/AdminDashboard/OrdersData'
import ProductsData from '../Components/AdminDashboard/ProductsData'
import { useDispatch, useSelector } from 'react-redux'
import { totalRevenueData } from '../Redux/Features/Admin/AdminSlice'
import { ordersDataArray, StatisticsArray } from '../Utils/Constant'
function AdminDashboardPage() {
    const revenueArray = useSelector(totalRevenueData)

    return (
        <>
            <section
                className='d-flex position-relative bg-light'
                style={{ minHeight: 'calc(100vh - 60px)' }}
            >
                <DashboardNav />
                <section className='container d-flex justify-content-center align-items-center '>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route
                            path='/statistics'
                            element={
                                <OrdersData ordersArray={ordersDataArray} />
                            }
                        />
                        <Route
                            path='/products'
                            element={
                                <ProductsData ordersArray={ordersDataArray} />
                            }
                        />
                    </Routes>
                </section>
            </section>
        </>
    )
}

export default AdminDashboardPage
