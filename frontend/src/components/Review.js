import * as React from 'react';
import {useContext,useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CartContext from "../contexts/CartContext";
import formatCurrency from "format-currency";
import AddressContext from '../contexts/AddressContext';



export default function Review(props) {
  let opts = { format: "%s%v", symbol: "₹" };
  let items=[]
  let totalAmt=0
  const {cartItems, setTotalAmount} = useContext(CartContext);

  for(let i=0;i<cartItems.length;i++){
    totalAmt+=parseFloat(cartItems[i].price)
    items.push({
      name: cartItems[i].type,
      desc: '',
      price: formatCurrency(`${cartItems[i].price}`, opts),
    })
  }

  useEffect(() => {
    setTotalAmount(totalAmt)
    // eslint-disable-next-line
  }, [])

  const {firstName, lastName, address1, address2, city, zip, country} = useContext(AddressContext)
  const addresses = [address1, address2, city, zip, country];

  const name = `${firstName} ${lastName}`

  return (
    <React.Fragment>
        <Box m={2} p={3}>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
        </Box>
        <List>
          <Grid item container direction="column" spacing={2}>
            {items.map((product) => (
              <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={product.name} />
                <Typography variant="body2">{product.price}</Typography>
              </ListItem>
            ))}
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {formatCurrency(`${totalAmt}`, opts)}
              </Typography>
            </ListItem>
          </Grid>
        </List>

        <Box m={1} p={2}>
          <Typography variant="h6" gutterBottom>
            Shipping
          </Typography>
        </Box>

        <Box m={2} p={3}>
          <Grid container>
              <Grid item >
              <Box p={1}>
                <Typography gutterBottom align='left'>{name}</Typography>
                <Typography gutterBottom align='left'>{addresses.join(', ')}</Typography>
                </Box>
              </Grid>
          </Grid>
        </Box>
    </React.Fragment>
  );
}