import React from 'react'
import classes from './css/OrderReview.module.css'
import { formatPrice } from '../../Utils/Helpers'

function OrderReview({ total, cart }) {
    const orderProduct = cart.map((item) => {
        return (
            <div key={item.id} id='product' className={classes.ordered_product}>
                <div>
                    <h4 className='m-0 d-inline'>{item.product.name}</h4>
                    <sup> * {item.amount}</sup>
                </div>
                <div className='col fw-bold product_price'>
                    Price:{' '}
                    <span className='lead fs-6'>
                        {item.product.onSale
                            ? formatPrice(
                                  item.product.price *
                                      (1 - item.product.saleNumber / 100)
                              )
                            : formatPrice(item.product.price)}
                    </span>
                </div>
            </div>
        )
    })

    return (
        <div className={classes['order-review']}>
            <h2>Ordered Products</h2>
            <div className={classes['order-products']}>{orderProduct}</div>
            <div className={classes['order-total']}>
                Total Price: {formatPrice(total)}
            </div>
        </div>
    )
}

export default OrderReview
