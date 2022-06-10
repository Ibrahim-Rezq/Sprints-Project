import React from 'react'
import { formatPrice } from '../../Utils/Helpers'
import { MdOutlineCancelPresentation } from 'react-icons/md'
function SingleOrder(props) {
    return (
        <>
            <div className='d-flex border-bottom border-secondary border-2 p-1 m-1 align-items-center justify-content-between'>
                <p className='m-0 mx-2 w-25'>{props.order.orderId}</p>
                <p className='m-0 mx-2 w-25'>{formatPrice(props.order.price)}</p>
                <p className='m-0 mx-2 w-25'>{props.order.orderDate}</p>
                <p className='m-0 mx-2 w-25'>{props.order.status}</p>
                <p className='fs-2  m-0 px-2 mb-1 w-25'>
                    <a
                        onClick={(e) => e.preventDefault()}
                        className='text-danger'
                    >
                        <MdOutlineCancelPresentation />
                    </a>
                </p>
            </div>
        </>
    )
}

export default SingleOrder
