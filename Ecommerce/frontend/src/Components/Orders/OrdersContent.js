import React from 'react'
import SingleOrder from './'
import { OrdersArray, StatisticsArray } from '../../Utils/Constant'

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
                                        <th
                                            key={value}
                                            className='p-3'
                                            scope='col'
                                        >
                                            {value}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {OrdersArray.map((order) => {
                                const {
                                    orderId,
                                    orderNumber,
                                    userId,
                                    orderDate,
                                    price,
                                    status,
                                } = order

                                return (
                                    <tr key={orderId}>
                                        <td style={{ minWidth: '7rem' }}>
                                            {orderNumber}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {price}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {orderDate}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {status}
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
