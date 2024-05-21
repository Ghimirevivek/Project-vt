import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CustomCard = ({ image }) => {
  return (
    <div
      className={`min-w-[21rem] max-w-[23rem] bg-hero3 h-[580px] bg-cover rounded-3xl flex flex-col items-center justify-start py-10`}
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
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };
  return (
    <div className='bg-[#EAEBF1] w-full h-auto flex flex-col items-center justify-center gap-6 pt-10 pb-20'>
      <h1 className='text-[3.2rem] font-bold'>MORE SIXT</h1>
      <div className='flex items-center flex-col justify-between gap-10 -mt-2'>
        <div
          ref={sliderRef}
          id='slider'
          className='flex items-center justify-between gap-10 -mt-2 overflow-x-scroll scroll scroll-smooth'
        >
          {' '}
          <CustomCard image={'hero1'} />
          <CustomCard image={'hero2'} />
          <CustomCard image={'hero3'} />
        </div>
        <div className='flex items-center justify-end w-full -ml-10 '>
          <MdChevronLeft
            size={30}
            onClick={slideLeft}
            className='cursor-pointer hover:scale-110 mr-8 mt-1 text-black shadow-lg flex items-center bg-white justify-between rounded-[10px] transition ease-in delay-40 duration-200'
          />
          <MdChevronRight
            size={30}
            onClick={slideRight}
            className='cursor-pointer hover:scale-110 mr-8 mt-1 text-black shadow-lg bg-white flex items-center justify-between rounded-[10px] transition ease-in delay-40 duration-200'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
