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
            <section className='container text-dark text-center '>
                <h3 className='p-4 display-4'>Recent Orders</h3>{' '}
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered table-sm'>
                        <thead>
                            <tr>
                                {values.map((value) => {
                                    return (
                                        <th className='p-3' scope='col'>
                                            {value}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {ordersArray.map((order) => {
                                const { id, number, cost, orderData, statues } =
                                    order

                                return (
                                    <tr key={id}>
                                        <td style={{ minWidth: '7rem' }}>
                                            {number}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {cost}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {orderData}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {statues}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            <button className='btn btn-warning'>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default OrdersContent
