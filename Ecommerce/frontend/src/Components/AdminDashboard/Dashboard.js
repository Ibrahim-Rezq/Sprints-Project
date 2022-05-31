import React from 'react'
import Statistics from './Statistics'
import EarningData from './EarningData'
import OrdersData from './OrdersData'
import { useDispatch, useSelector } from 'react-redux'
import { totalRevenueData } from '../../Redux/Features/Admin/AdminSlice'
import { ordersDataArray, StatisticsArray } from '../../Utils/Constant'

function Dashboard() {
    const revenueArray = useSelector(totalRevenueData)
    return (
        <>
            <section className=' '>
                <Statistics StatisticsArray={StatisticsArray} />
                <EarningData revenueArray={revenueArray} />
                {/* <OrdersData ordersArray={ordersDataArray} /> */}
            </section>
        </>
    )
}

export default Dashboard
