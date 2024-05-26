import React from 'react';

const Banner = () => {
  return (
    <>
      <div className='w-full h-auto flex flex-col items-center justify-center bg-[#FE5F01] py-8'>
        <div className='text-3xl lg:text-7xl font-bold tracking-tighter text-[#1A1A1A]'>
          DON'T RENT A CAR
        </div>
        <div className='text-3xl lg:text-7xl font-bold tracking-tighter text-[#1A1A1A]'>
          RENT THE CAR
        </div>
        <div className='text-sm font-semibold text-[#1A1A1A] mt-2'>
          Premium car rental at affordable rates. Worldwide
        </div>
      </div>
      <div className='w-full h-auto flex items-center justify-around bg-white py-14 px-4 md:px-2 md:py-20 gap-6 flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col items-center md:items-start justify-center w-full md:max-w-[23rem] min-w-[18rem]'>
          <div className='flex items-center flex-col md:flex-row justify-center gap-2'>
            <svg width='30' height='30' viewBox='0 0 24 24'>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'></path>
            </svg>
            <span className='text-xl font-semibold'>Global reach</span>
          </div>
          <div className='text-lg md:text-2xl font-bold mt-2'>
            2,000+ SIXT stations in over 105 countries
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start justify-center w-full md:max-w-[23rem] min-w-[18rem]'>
          <div className='flex items-center flex-col md:flex-row justify-center gap-2'>
            <svg width='30' height='30' viewBox='0 0 24 24'>
              <path d='M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z'></path>
            </svg>
            <span className='text-xl font-semibold'>Distinctive fleet</span>
          </div>
          <div className='text-lg md:text-2xl font-bold mt-2'>
            From high-end convertibles to premium SUVs
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start justify-center w-full md:max-w-[23rem] min-w-[18rem]'>
          <div className='flex items-center flex-col md:flex-row justify-center gap-2'>
            <svg width='30' height='30' viewBox='0 0 24 24'>
              <path d='M1 11h4v11H1zm15-7.75C16.65 2.49 17.66 2 18.7 2 20.55 2 22 3.45 22 5.3c0 2.27-2.91 4.9-6 7.7-3.09-2.81-6-5.44-6-7.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25zM20 17h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8.01-3c-.01-1.1-.9-2-2.01-2z'></path>
            </svg>
            <span className='text-xl font-semibold'>Exceptional service</span>
          </div>
          <div className='text-lg md:text-2xl font-bold mt-2'>
            Stress-free, trustworthy, no hidden costs
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
