import React from 'react'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import Cart from './components/Cart';
import CreateShirt from './components/CreateShirt';
import CreatePant from './components/CreatePant';
import CreateSuit from './components/CreateSuit';
import Checkout from './components/Checkout';
import ShirtPage from './components/ShirtPage';
import SuitPage from './components/SuitPage';
import PantPage from './components/PantPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <div className= 'App'>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/' exact render={() =>
              <div>
                <Navbar/>
                <HomePage className='HomePage'/>
              </div>} />
            <Route path='/signup' exact component={SignUp}/>
            <Route path='/login' exact component={SignIn}/>
            <Route path='/forgot-password' exact component={ForgotPassword}/>
            <Route path='/create-shirt' exact component={CreateShirt}/>
            <Route path='/create-pant' exact component={CreatePant}/>
            <Route path='/create-suit' exact component={CreateSuit}/>
            <Route path='/cart' exact component={Cart}/>
            <Route path='/checkout' exact component={Checkout}/>
            <Route path='/shirts' exact component={ShirtPage}/>
            <Route path='/suits' exact component={SuitPage}/>
            <Route path='/pants' exact component={PantPage}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
