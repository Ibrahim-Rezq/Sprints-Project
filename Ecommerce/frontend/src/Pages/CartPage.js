import React, { useEffect } from 'react';
import { CartContent } from '../Components/Cart';
// Dont Mind Redux ToolKit Related
///////////////////////////////////////////////////
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, selectCount } from '../Redux/Features/Cart/CartSlice';
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////
function CartPage() {
  // Dont Mind Redux ToolKit Related
  ///////////////////////////////////////////////////
  const { cart, total, totalAmount } = useSelector(selectCount);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(cart);
    // console.log(total);
    // console.log(totalAmount);
  }, [cart]);
  ///////////////////////////////////////////////////

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: 'calc(100vh - 60px)' }}>
      {cart && cart.length > 0 ? (
        <CartContent content={cart} />
      ) : (
        <div className='text-center'>
          <h2>No Items Found in cart</h2>
          <br />
          <Link className='btn-danger btn' to='/products'>
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
