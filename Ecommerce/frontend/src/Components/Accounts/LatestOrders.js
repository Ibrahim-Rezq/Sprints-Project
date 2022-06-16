import React from 'react'
import { useOrdersContext } from '../../Context/OrderContext'
import { formatPrice } from '../../Utils/Helpers'

function LatestOrders(props) {
    const { orders } = useOrdersContext()
    const ordersVeiw = orders.map((order) => (
        <tr key={order.orderId}>
            <td>{order.orderId}</td>
            <td>{formatPrice(order.price)}</td>
            <td>{order.orderDate}</td>
            <td>{order.status}</td>
        </tr>
    ))

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Order Price</th>
                    <th>Order Date</th>
                    <th>Order Status</th>
                </tr>
            </thead>
            <tbody>{ordersVeiw}</tbody>
        </table>
    )
}

export default LatestOrders
