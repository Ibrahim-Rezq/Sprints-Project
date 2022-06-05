import React from 'react'
import { Statistics, EarningData, ProductsData, OrdersData } from './'

function Dashboard({
    totalRevenue,
    ordersArray,
    productsDataArray,
    statisticsArray,
}) {
    return (
        <>
            <section className='bg-light py-4 m-2'>
                <Statistics StatisticsArray={statisticsArray} />
                <EarningData totalRevenue={totalRevenue} />
                <OrdersData ordersArray={ordersArray} />
                <ProductsData ProductsArray={productsDataArray} />
            </section>
        </>
    )
}

export default Dashboard
