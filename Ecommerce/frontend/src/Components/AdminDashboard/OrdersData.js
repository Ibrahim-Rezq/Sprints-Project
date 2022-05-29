import React from 'react'
import SingleOrderData from './SingleOrderData'
function OrdersData({ ordersArray }) {
    return (
        <>
            {ordersArray.map((order) => {
                return <SingleOrderData key={order.id} order={order} />
            })}
        </>
    )
}

export default OrdersData
