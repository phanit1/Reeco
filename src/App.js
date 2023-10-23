import React from 'react';
import Header from './components/Header';
import OrderDetails from './components/OrderDetails';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <div className="app">
      <Header />
      <br></br>
      <OrderDetails />
      <br></br>
      <ProductDetails />
    </div>
  );
};

export default App;
