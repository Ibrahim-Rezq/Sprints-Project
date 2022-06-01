import React from 'react'
import Statistics from './Statistics'
import EarningData from './EarningData'
import { useDispatch, useSelector } from 'react-redux'
import { totalRevenueData } from '../../Redux/Features/Admin/AdminSlice'
import { ordersDataArray, StatisticsArray } from '../../Utils/Constant'

function Dashboard() {
    const revenueArray = useSelector(totalRevenueData)
    return (
        <>
            <section className='bg-dark '>
                <Statistics StatisticsArray={StatisticsArray} />
                <EarningData revenueArray={revenueArray} />
            </section>
        </>
    )
}

export default Dashboard
