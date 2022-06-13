import React from 'react';
import styled from 'styled-components';
import { SingleCartItem } from './';

function CartContent({ content }) {
  const values = ['Item', 'Price', 'Quantity', 'SubTotal', ' '];
  return (
    <>
      <div className='row text-center'>
        <h6 className='col-4 lead text-light'>Item</h6>
        <h6 className='col-2 lead text-light'>Price</h6>
        <h6 className='col-2 lead text-light'>Quantity</h6>
        <h6 className='col-2 lead text-light'>SubTotal</h6>
        <h6 className='col-2 lead text-light'></h6>
      </div>
      <hr />
      {content.map((cartItem) => {
        return <SingleCartItem key={cartItem.id} item={cartItem} />;
      })}
    </>
  );
}

// const CartWrapper = styled.section`
//     background: red;
//     .col-2Container {
//         background: black;
//         color: white;
//         display: grid;
//     }
// `
export default CartContent;
