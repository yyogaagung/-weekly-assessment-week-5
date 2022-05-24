import React from 'react';
import Footer from './component/Footer';
import ProductList from './component/Main';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
