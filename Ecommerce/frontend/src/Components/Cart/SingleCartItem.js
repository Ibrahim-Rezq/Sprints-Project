import React, { useState } from 'react'
import { CartAmountButtons } from './'
import { GoTrashcan } from 'react-icons/go'
import { formatPrice } from '../../Utils/Helpers'
import { useCartContext } from '../../Context/CartContext'

function SingleCartItem({ item: { id, amount, product } }) {
    const { REACT_APP_API_URL } = process.env

    const { removeItem, toggleAmount } = useCartContext()
    const [itemAmount, setItemAmount] = useState(amount)
    const handleSetAmount = (num) => {
        let sum = itemAmount + num
        if (sum > product.stock) sum = product.stock
        if (sum < 1) sum = 1
        setItemAmount(sum)
        toggleAmount(id, sum)
    }
    return (
        <>
            <div className='row py-4 align-items-center justify-content-evenly justify-content-md-center text-center'>
                <div className='col-6 col-md-4 p-0 m-0 row'>
                    <div className='col-6'>
                        <img
                            src={
                                product.image
                                    ? REACT_APP_API_URL + product.image
                                    : 'https://fakeimg.pl/640x360'
                            }
                            alt=''
                            className='img-fluid rounded '
                        />
                    </div>
                    <div className=' col-6 d-flex align-items-center '>
                        <h5 className='w-100 text-dark fw-bold'>
                            {product.name}{' '}
                            <span className='d-inline d-md-none fs-6'>
                                {product.onSale
                                    ? formatPrice(
                                          product.price *
                                              (1 - product.saleNumber / 100)
                                      )
                                    : formatPrice(product.price)}
                            </span>{' '}
                        </h5>
                    </div>
                </div>
                <p className='d-none d-md-block col-2 p-0 m-0'>
                    {product.onSale
                        ? formatPrice(
                              product.price * (1 - product.saleNumber / 100)
                          )
                        : formatPrice(product.price)}
                </p>
                <span className=' col-3 col-md-2 p-0 m-0'>
                    <CartAmountButtons
                        amount={itemAmount}
                        handleSetAmount={handleSetAmount}
                    />
                </span>
                <p className=' d-none d-md-block col-2 p-0 m-0'>
                    {product.onSale
                        ? formatPrice(
                              product.price *
                                  (1 - product.saleNumber / 100) *
                                  itemAmount
                          )
                        : formatPrice(product.price * itemAmount)}
                </p>
                <p className='fs-4 col-12 col-md-2 m-0 mt-2 mt-md-0 mb-md-2 '>
                    <span className=' d-inline me-4 d-md-none col-2 p-0 m-0'>
                        {product.onSale
                            ? formatPrice(
                                  product.price *
                                      (1 - product.saleNumber / 100) *
                                      itemAmount
                              )
                            : formatPrice(product.price * itemAmount)}{' '}
                    </span>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            removeItem(id)
                        }}
                        className='text-danger border-0'
                    >
                        <GoTrashcan />
                    </button>
                </p>
            </div>
        </>
    )
}

export default SingleCartItem
