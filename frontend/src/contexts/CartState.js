import React, {useReducer} from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, SET_CART, SET_TOTAL_AMOUNT, SET_ORDER_ID} from './CartTypes'

const CartState = ({children}) => {

    const initialState = {
        showCart: false,
        cartItems: [],
        totalAmount: 0,
        orderId: ''
    }
    
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (item) => {
        dispatch({type: ADD_TO_CART, payload: item})
    }
    
    const showHideCart = () => {
        dispatch({type: SHOW_HIDE_CART})
    }

    const removeItem = id => {
        dispatch({type: REMOVE_ITEM, payload: id})
    }

    const setCart = (items) => {
        dispatch({type: SET_CART, payload: items})
    }

    const setTotalAmount = (item) => {
        dispatch({type: SET_TOTAL_AMOUNT, payload: item})
    }
    const setOrderId = (item) => {
        dispatch({type: SET_ORDER_ID, payload: item})
    }

    return(
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            totalAmount: state.totalAmount,
            orderId:state.orderId,
            setOrderId,
            addToCart,
            showHideCart,
            removeItem,
            setCart,
            setTotalAmount
            }}>
                {children}
        </CartContext.Provider>
    )
}

export default CartState