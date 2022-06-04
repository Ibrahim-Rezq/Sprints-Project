import React from 'react';
import { SingleCartItem } from './';

function CartContent({ content }) {
  const values = ['item', '  ', 'amount', ' ', 'remove Item'];
  return (
    <section className='container bg-light border text-center rounded '>
      <div className='d-flex border-bottom border-info border-2 p-1 m-1 align-items-center justify-content-between'>
        {values.map((value) => {
          return (
            <h6
              key={value}
              className='m-0 text-secondary mx-2 my-3 w-25 text-capitalize'>
              {value}
            </h6>
          );
        })}
      </div>

      {content.map((cartItem) => {
        return <SingleCartItem key={cartItem.id} item={cartItem} />;
      })}
    </section>
  );
}

export default CartContent;
