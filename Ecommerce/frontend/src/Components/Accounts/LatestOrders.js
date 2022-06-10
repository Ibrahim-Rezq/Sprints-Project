import React from 'react';
import { SingleOrder } from '../Orders';
import { OrdersArray } from '../../Utils/Constant';

function LatestOrders(props) {
    return (
        <div>
            <SingleOrder order={OrdersArray[0]}></SingleOrder>
        </div>
    );
}

export default LatestOrders;