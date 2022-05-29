import React from 'react'
import Statistics from './Statistics'
import EarningData from './EarningData'
import OrdersData from './OrdersData'
import { useDispatch, useSelector } from 'react-redux'
import { totalRevenueData } from '../../Redux/Features/Admin/AdminSlice'
import { ordersArray } from '../../Utils/Constant'

function Dashboard() {
    const revenueArray = useSelector(totalRevenueData)
    return (
        <>
            <Statistics revenueArray={revenueArray} />
            <EarningData revenueArray={revenueArray} />
            <OrdersData ordersArray={ordersArray} />
        </>
    )
}

export default Dashboard
