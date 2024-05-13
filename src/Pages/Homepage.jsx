import React from 'react';
import Header from '../components/Homepage/Header';
import Hero from '../components/Homepage/Hero';
import Footer from '../components/Homepage/Footer';
import Hero2 from '../components/Homepage/Hero2';
import Banner from '../components/Homepage/Banner';

const Homepage = () => {
  return (
    <div className='max-w-[150rem] flex flex-col items-center justify-center mx-auto'>
      <div className='w-full'>
        <Header />
        <Banner />
        <Hero2 />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
