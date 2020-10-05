import React from 'react';
import './App.css';
import Products from './Products/Products';

function App() {
  return (
    <main className="container"> 
      <h1>Products</h1>
      <div className="container-fluid">
        <Products />
      </div>
    </main>
  );
}

export default App;
