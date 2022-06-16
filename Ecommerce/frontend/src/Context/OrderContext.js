import React, { useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    OrdersState,
    addNewOrder,
    initOrders,
} from '../Redux/Features/Orders/OrdersSlice'
import { useUserContext } from './UserContext'

const OrdersContext = React.createContext()

export const OrdersProvider = ({ children }) => {
    const state = useSelector(OrdersState)
    const dispatch = useDispatch()
    const { user } = useUserContext()

    const addOrder = (order) => {
        dispatch(addNewOrder(order))
    }

    useEffect(() => {
        localStorage.setItem('orders' + user.id, JSON.stringify(state.orders))
        // eslint-disable-next-line
    }, [state.orders])
    useEffect(() => {
        const orders = localStorage.getItem('orders' + user.id)
        if (orders) {
            dispatch(
                initOrders(JSON.parse(localStorage.getItem('orders' + user.id)))
            )
        } else {
            dispatch(initOrders([]))
        }
        // eslint-disable-next-line
    }, [user])

    return (
        <OrdersContext.Provider value={{ ...state, addOrder }}>
            {children}
        </OrdersContext.Provider>
    )
}
// make sure use
export const useOrdersContext = () => {
    return useContext(OrdersContext)
}
