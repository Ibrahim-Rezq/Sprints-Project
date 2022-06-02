import React from 'react'
import Statistics from './Statistics'
import EarningData from './EarningData'
import ProductsData from './ProductsData'
import OrdersData from './OrdersData'
import { useDispatch, useSelector } from 'react-redux'
import { totalRevenueData } from '../../Redux/Features/Admin/AdminSlice'
import {
    ordersDataArray,
    ProductsDataArray,
    StatisticsArray,
} from '../../Utils/Constant'

function Dashboard() {
    const revenueArray = useSelector(totalRevenueData)
    return (
        <>
            <section className='bg-light py-4 m-2'>
                <Statistics StatisticsArray={StatisticsArray} />
                <EarningData revenueArray={revenueArray} />
                <OrdersData ordersArray={ordersDataArray} />
                <ProductsData ProductsArray={ProductsDataArray} />
            </section>
        </>
    )
}

export default Dashboard
