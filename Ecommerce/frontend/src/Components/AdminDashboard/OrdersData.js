import React from 'react'
function OrdersData({ ordersArray }) {
    const headers = [
        '#',
        'Order Number',
        'Customer Order',
        'Date',
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
                                        <th className='p-3' scope='col'>
                                            {header}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {ordersArray.map((order) => {
                                const { id, Num, customer, orderData, status } =
                                    order

                                return (
                                    <tr key={id}>
                                        <td style={{ minWidth: '7rem' }}>
                                            {id}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {Num}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {customer}
                                        </td>
                                        <td style={{ minWidth: '7rem' }}>
                                            {orderData}
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

export default OrdersData
