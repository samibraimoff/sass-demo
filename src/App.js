import React, { Fragment } from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';

import './sass/main.scss';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <AboutUs />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default App;
