import React from 'react'
import SingleOrderData from './SingleOrderData'
function OrdersData({ ordersArray }) {
    return (
        <>
            <section className='container text-dark '>
                <h3 className='text-center display-4'>Recent Orders</h3>

                <section className='bg-dark border rounded border-secondary my-3  container p-0'>
                    {ordersArray.map((order) => {
                        return <SingleOrderData key={order.id} order={order} />
                    })}
                </section>
            </section>
        </>
    )
}

export default OrdersData
