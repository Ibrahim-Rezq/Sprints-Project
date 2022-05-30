import React from 'react'
import SingleOrder from './SingleOrder'
import { ordersArray, StatisticsArray } from '../../Utils/Constant'

function OrdersContent() {
    const values = [
        'order Number',
        'order Cost',
        'order Date',
        'order Statues',
        'Cancel Order',
    ]
    return (
        <>
            <section className='container bg-light border text-center rounded '>
                <div className='d-flex border-bottom border-info border-2 p-1 m-1 align-items-center justify-content-between'>
                    {values.map((value) => {
                        return (
                            <h6
                                key={value}
                                className='m-0 text-secondary mx-2 my-3 w-25 text-capitalize'
                            >
                                {value}
                            </h6>
                        )
                    })}
                </div>
                {ordersArray.map((order) => {
                    return <SingleOrder order={order} />
                })}
            </section>
        </>
    )
}

export default OrdersContent
