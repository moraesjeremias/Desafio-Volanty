import React from 'react';

import Header from '../components/header';
import Description from '../components/description';
import Cards from '../components/product';
import Button from '../components/button';
import Footer from '../components/footer';

const Home = () => (
    <div className="App">
      <Header />
      <Description />
      <Cards />
      <Button />
      <Footer />
    </div>
);

export default Home;