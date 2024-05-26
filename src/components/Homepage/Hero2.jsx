import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CustomCard = ({ image }) => {
  return (
    <div
      className={`min-w-[23rem] max-w-[25rem] bg-hero3 h-[580px] bg-cover rounded-3xl flex flex-col items-center justify-start py-10`}
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
    <div className='h-auto px-4 pt-4 lg:px-20 pb-10 bg-gray-200'>
      <h1 className='text-[2rem] sm:text-[3rem] font-bold  my-4 w-full flex items-center justify-center'>
        MORE SIXT
      </h1>

      <div className='flex flex-col '>
        <div
          ref={sliderRef}
          id='slider'
          className='overflow-x-scroll scroll scroll-smooth flex items-center justify-around w-full gap-10 scrollbar-hide'
        >
          <CustomCard image={'hero1'} />
          <CustomCard image={'hero1'} />
          <CustomCard image={'hero1'} />
          <CustomCard image={'hero1'} />
          <CustomCard image={'hero1'} />
        </div>
        <div className='flex items-center justify-end w-full -ml-10 mt-4'>
          <MdChevronLeft
            size={30}
            onClick={slideLeft}
            className='cursor-pointer hover:scale-110 mr-8 mt-1 text-black shadow-lg flex items-center bg-gray-100 hover:bg-white justify-between rounded-[10px] transition ease-in delay-40 duration-200'
          />
          <MdChevronRight
            size={30}
            onClick={slideRight}
            className='cursor-pointer hover:scale-110 mr-8 mt-1 text-black shadow-lg bg-gray-100 hover:bg-white flex items-center justify-between rounded-[10px] transition ease-in delay-40 duration-200'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
