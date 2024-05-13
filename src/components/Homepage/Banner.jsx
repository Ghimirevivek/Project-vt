import React from 'react';

const Banner = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-[#FE5F01] py-8'>
      <div className='text-7xl font-bold tracking-tighter text-[#1A1A1A]'>
        DON'T RENT A CAR
      </div>
      <div className='text-7xl font-bold tracking-tighter text-[#1A1A1A]'>
        RENT THE CAR
      </div>
      <div className='text-sm font-semibold text-[#1A1A1A] mt-2'>
        Premium car rental at affordable rates. Worldwide
      </div>
    </div>
  );
};

export default Banner;
