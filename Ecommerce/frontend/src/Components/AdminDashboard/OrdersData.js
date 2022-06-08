import React, { useState } from 'react'
import { OrderDataRow } from './'

function OrdersData({ ordersArray }) {
    const headers = [
        '#',
        'Order Number',
        'Customer Id',
        'Date',
        'Price',
        'Status',
        'Edit Order',
    ]
    return (
        <>
            <section className='container text-dark text-center '>
                <h3 className='p-4 display-4'>Recent Orders</h3>{' '}
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered table-sm'>
                        <thead>
                            <tr>
                                {headers.map((header) => {
                                    return (
                                        <th
                                            key={header}
                                            className='p-3'
                                            scope='col'
                                        >
                                            {header}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {ordersArray.map((order) => {
                                return (
                                    <OrderDataRow
                                        key={order.idw}
                                        order={order}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default OrdersData
