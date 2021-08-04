import { SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM,SET_CART, SET_TOTAL_AMOUNT, SET_ORDER_ID } from './CartTypes';
const CartReducer = (state, action) => {
    switch (action.type) {

        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart
            }
        }

        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }

        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        }

        case SET_CART: {
            return {
                ...state,
                cartItems: [action.payload.map()]
            }
        }

        case SET_TOTAL_AMOUNT: {
            return {
                ...state,
                totalAmount: action.payload
            }
        }

        case SET_ORDER_ID:{
            return {
                ...state,
                orderId: action.payload
            }
        }

        default:
            return state
    }
}

export default CartReducer