import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductEditScreen from './screens/ProductEditScreen';


function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
          <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/products/:id' component={ProductScreen}></Route>
          <Route path='/login' component={LoginScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/products/:id/edit' component={ProductEditScreen}></Route>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
