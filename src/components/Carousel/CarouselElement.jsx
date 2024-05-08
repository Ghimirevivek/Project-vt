import React from 'react';
import { Carousel, Typography } from '@material-tailwind/react';
import banner from '../../Assets/carouselimg.webp';
const CarouselElement = () => {
  return (
    <Carousel className=''>
      <div className='relative h-full w-full'>
        <img src={banner} alt='image1' className='h-full w-full object-cover' />
        <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/25'>
          <div className='w-3/4 text-center md:w-3/4'>
            <Typography
              variant='h3'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-4xl'
            >
              Very easy rental experience...so important when driving in another
              country. Car was great and no hidden fees.
            </Typography>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img src={banner} alt='image1' className='h-full w-full object-cover' />
        <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/25'>
          <div className='w-3/4 text-center md:w-3/4'>
            <Typography
              variant='h3'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-4xl'
            >
              Very easy rental experience...so important when driving in another
              country. Car was great and no hidden fees.
            </Typography>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img src={banner} alt='image1' className='h-full w-full object-cover' />
        <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/25'>
          <div className='w-3/4 text-center md:w-3/4'>
            <Typography
              variant='h3'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-4xl'
            >
              Very easy rental experience...so important when driving in another
              country. Car was great and no hidden fees.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselElement;
