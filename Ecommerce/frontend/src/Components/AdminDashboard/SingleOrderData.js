import React from 'react'

const SingleOrderData = ({ order }) => {
    const { Num, customer, orderData } = order
    return (
        <>
            <div style={{ display: 'flex' }}>
                <p>Order Number: {Num}</p> <p>Orderd By: {customer}</p>{' '}
                <p>Order Date: {orderData}</p>
            </div>
        </>
    )
}

export default SingleOrderData
