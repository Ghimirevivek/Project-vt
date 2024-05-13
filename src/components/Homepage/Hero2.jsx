import React from 'react';

const CustomCard = ({ image }) => {
  return (
    <div
      className={`w-[385px] bg-hero3 h-[580px] bg-cover rounded-3xl flex flex-col items-center justify-start py-10`}
    >
      <h3 className='text-white font-bold text-2xl'>SIXT+ Car Subscription</h3>
      <p className='text-white font-semibold text-sm py-4'>
        The better way of owning a car.
      </p>
      <button className='py-2 px-6 bg-transparent border border-[#FEFFFE] rounded-3xl text-sm text-white font-semibold mt-2'>
        Learn more
      </button>
    </div>
  );
};
const Hero2 = () => {
  return (
    <div className='bg-[#EAEBF1] w-full h-auto flex flex-col items-center justify-center gap-6 pt-10 pb-20'>
      <h1 className='text-[3.2rem] font-bold'>MORE SIXT</h1>
      <div className='flex items-center justify-between gap-10 -mt-2'>
        <CustomCard image={'hero1'} />
        <CustomCard image={'hero2'} />
        <CustomCard image={'hero3'} />
      </div>
    </div>
  );
};

export default Hero2;
