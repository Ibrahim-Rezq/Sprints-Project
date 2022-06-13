import React from 'react';
import { SingleOrder } from '../Orders';
import { OrdersArray } from '../../Utils/Constant';

function LatestOrders(props) {

    const orders = OrdersArray.map((order)=>(
        <tr>
            <td>{order.orderId}</td>
            <td>{order.price}</td>
            <td>{order.orderDate}</td>
            <td>{order.status}</td>
        </tr>
    ));

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Order Price</th>
                    <th>Order Date</th>
                    <th>Order Status</th>
                </tr>
            </thead>
            <tbody>
                {orders}
            </tbody>
        </table>
    );
}

export default LatestOrders;