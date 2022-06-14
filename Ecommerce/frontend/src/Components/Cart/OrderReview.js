import React from 'react';
import classes from './css/OrderReview.module.css';

function OrderReview(props) {
  let totalPrice = 0;

  const orderProduct = props.products.map((prod) => {
    totalPrice += prod.price;
    return (
      <div key={prod.title} id='product' className={classes.ordered_product}>
        <h4 className='m-0'>{prod.title}</h4>
        <div className='product_price'>Price: {prod.price}</div>
      </div>
    );
  });

  return (
    <div className={classes['order-review']}>
      <h2>Ordered Products</h2>
      <div className={classes['order-products']}>{orderProduct}</div>
      <div className={classes['order-total']}>Total Price: ${totalPrice}</div>
    </div>
  );
}

export default OrderReview;
