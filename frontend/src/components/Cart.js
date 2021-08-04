import React ,{ useContext} from "react";
import "./Cart.css";
import CartContext from "../contexts/CartContext";
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import {useHistory} from 'react-router-dom';

const Cart = () => {
  const history = useHistory()
  const {cartItems} = useContext(CartContext);
  //let opts = { format: "%s%v", symbol: "₹" };
  let items=[]
  for(let i=0;i<cartItems.length;i++){
    cartItems[i].id=i;
    items.push(<CartItem item={cartItems[i]} key={i}/>)
  }

  return (
    <div className='Cart'>
      <div className='heading'>Cart</div>
      <div>{items}</div>
      <div className='checkout-button-container'>
        <Button variant="contained" color="primary" className='checkout-button' onClick={()=>{history.push('/checkout')}}><ShoppingCartIcon size="large"/>Checkout</Button>
        </div>
    </div>
  );
};

export default Cart;