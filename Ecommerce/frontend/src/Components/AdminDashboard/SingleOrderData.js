import React from 'react'

const SingleOrderData = ({ order }) => {
    const { Num, customer, orderData } = order
    return (
        <>
            <div className='d-flex border-bottom border-info border-2 p-1 m-1'>
                <p className='mx-2'>
                    Order Number: <span className='text-info'>{Num}</span>
                </p>
                <p className='mx-2'>
                    Orderd By: <span className='text-info'>{customer}</span>
                </p>
                <p className='mx-2'>
                    Order Date:
                    <span className='text-info'> {orderData}</span>
                </p>
            </div>
        </>
    )
}

export default SingleOrderData
