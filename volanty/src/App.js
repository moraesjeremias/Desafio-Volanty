import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import VolantyHeader from './components/header';
import Description from './components/description/';
import Cards from './components/product';
import Button from './components/button';
import Footer from './components/footer';

const App = () => (
    <div className="App">
      <VolantyHeader />
      <Description />
      <Cards />
      <Button />
      <Footer />
    </div>
);



export default App;
