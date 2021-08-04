import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../contexts/CartContext";
import formatCurrency from "format-currency";
import Button from '@material-ui/core/Button';


const CartItem = ({ item, key }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "₹" };
  let image_src= item.image
  let properties=''
  if(item.type==='Shirt'){
    properties= [<div className='property'>Model: {item.model}</div>, 
    <div className='property'>Collar: {item.collar}</div>, 
    <div className='property'>Cuff: {item.cuff}</div>, 
    <div className='property'>Sleeve: {item.sleeve}</div>,
    <div className='property'>Pocket: {item.pocket}</div>, 
    <div className='property'>Placket: {item.placket}</div>, 
    <div className='property'>Bottom Cut: {item.bottomcut}</div>, 
    <div className='property'>Back Details: {item.backdetail}</div>, 
    <div className='property'>Back Yoke: {item.backyoke}</div>,
    <div className='property'>Fabric: {item.fabric}</div>]
  }
  if(item.type==='Pant'){
    properties= [<div className='property'>Model: {item.model}</div>, 
    <div className='property'>Side Pocket: {item.sidepocket}</div>, 
    <div className='property'>Back Pocket Style: {item.backpocketstyle}</div>, 
    <div className='property'>Back Pocket: {item.backpocket}</div>,
    <div className='property'>Fly: {item.fly}</div>,
    <div className='property'>Fabric: {item.fabric}</div>]
  }
  if(item.type==='Suit Jacket' || item.type==='Waist Coat')
  {
    properties=[<div className='property'>Buttoning: {item.buttoning}</div>,
    <div className='property'>Lapel: {item.lapel}</div>,
    <div className='property'>PocketType: {item.pocketType}</div>,
    <div className='property'>Vent: {item.vent}</div>,
    <div className='property'>Fabric: {item.fabric}</div>]
  }

  if(item.type==='Three Piece Suit' || item.type==='Two Piece Suit')
  {
    properties=[<div className='property'>Buttoning: {item.buttoning}</div>,
    <div className='property'>Lapel: {item.lapel}</div>,
    <div className='property'>Pocket Type: {item.pocketType}</div>,
    <div className='property'>Vent: {item.vent}</div>,
    <div className='property'>Pant Buttoning: {item.pantButtoning}</div>,
    <div className='property'>Pant Pocket: {item.pantPocket}</div>,
    <div className='property'>Back Pocket Design: {item.backPocketDesign}</div>,
    <div className='property'>Back Pocket Placement: {item.backPocketPlacement}</div>,
    <div className='property'>Fabric: {item.fabric}</div>]
  }

  return (
    <div className='CartItem' key={key}>
      <img src={image_src} alt={item.type} className='item-img'/>
      <div className='item'>
        {item.type} {formatCurrency(`${item.price}`, opts)}
      </div>
      <div className='properties'>{properties}</div>

      <Button className='remove-button' variant="contained" color="secondary" onClick={() => removeItem(item.id)}>Remove</Button>
    </div>
  );
};

export default CartItem;