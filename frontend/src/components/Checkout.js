import React, {useContext} from 'react';
import CartContext from '../contexts/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Review from './Review';
import {ThemeProvider, createTheme} from '@material-ui/core/styles'
import AddressContext from '../contexts/AddressContext';
import Alert from '@material-ui/lab/Alert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        D.Jas Tailors
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));



function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

//const __DEV__ = document.domain === 'localhost'

export default function Checkout() {

  const {totalAmount} = useContext(CartContext)
  const {cartItems, setOrderId} = useContext(CartContext)
  const {firstName, lastName, address1, address2 , city, zip, country} = useContext(AddressContext)
  const {setFirstName, setLastName, setAddress1, setAddress2 , setCity, setZip, setCountry} = useContext(AddressContext)

  const AddressDetails = {
    firstName: firstName,
    lastName: lastName,
    address1: address1,
    address2: address2,
    city: city,
    zip: zip,
    country: country,
  }
  const steps = ['Shipping address', 'Review your order'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm/>;
      case 1:
        return <Review/>;
      case 2:
        return <Button variant="contained" color="primary">
        <MonetizationOnIcon/>Click to Pay</Button>;
      default:
        throw new Error('Unknown step');
    }
  }

  const data= {amount:totalAmount, cartItems: cartItems, address: AddressDetails}

  const sendAmount = () =>{
    console.log(`SentAmount: ${data.amount} \n SentAdress: ${JSON.stringify(data.address)}`);
    return fetch(`http://localhost:1337/amount`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response=>response.json()).catch(err=>console.log(err))
  }

  async function displayRazorpay() {

    sendAmount()

		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', {method:"POST"})
    .then((t) => t.json())

		console.log(data)

		const options = {
			//key: __DEV__ ? 'process.env.RAZORPAY_SECRET_KEY_ID' : 'PRODUCTION_KEY',
			key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Payment',
			description: 'Thank you for shopping with us',
			image: '',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
        setOrderId(response.razorpay_order_id)
        setActiveStep(activeStep + 1);
        setFirstName()
        setLastName()
        setAddress1()
        setAddress2()
        setCity()
        setZip()
        setCountry()
			},
			prefill: {
				name:'',
				email: '',
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}



  const theme = createTheme({palette: {
    type: 'dark',
  },})
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState();

    //firstName, lastName, address1, address2 , city, zip, country

  const handleNext = () => {
    if (!firstName || !lastName || !address1 || !city || !zip || !country) {
      setError('Please Enter The Required Details')
    } else {
      setActiveStep(activeStep + 1);
      setError()
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  let button;
  if (activeStep === steps.length - 1) {
    button = <Button
      variant="contained"
      color="primary"
      onClick={displayRazorpay}
      className={classes.button}>Pay</Button>;
  } else {
    button = <Button
      variant="contained"
      color="primary"
      onClick={handleNext}
      className={classes.button}>Next</Button>;
  }

  return (
    <div style={{backgroundColor:'#303030'}}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            D.Jas Tailors
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
              { error && <Alert severity="error">{error}</Alert>}
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Thank You for your order. You will recieve an email update with your order confirmation, and will
                  send you an update when your order has shipped. If you have any Queries you can contact us on +91 89102 51031.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {button}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
      </ThemeProvider>
    </div>
  );
}