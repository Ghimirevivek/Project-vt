import React from 'react';
import logo from '../../Assets/logo.jpg';
import DatepickerComponent from '../DatePicker/DatePickerComponent';
import { FaUser } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const Header = () => {
  return (
    <header class='shadow-md font-sans tracking-wide relative z-50'>
      <section class='py-1 bg-[#FF5F00] text-black text-right px-10 flex items-center justify-center'>
        <p class='text-sm'>
          <strong class='mx-3'>Address:</strong>SWF New York 185669
          <strong class='mx-3'>Contact No:</strong>1800333665
        </p>
      </section>

      <div className='bg-banner w-full h-full bg-cover bg-center bg-no-repeat '>
        <div class='flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-transparent min-h-[70px] relative'>
          <a href='/'>
            <img src={logo} alt='logo' class='w-[10rem]' />
          </a>

          <div
            id='collapseMenu'
            class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 '
          >
            <button
              id='toggleClose'
              class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-4 fill-black'
                viewBox='0 0 320.591 320.591'
              >
                <path
                  d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                  data-original='#000000'
                ></path>
                <path
                  d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                  data-original='#000000'
                ></path>
              </svg>
            </button>

            <ul class='lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 mr-[15rem]'>
              <li class='mb-6 hidden max-lg:block'>
                <a href='/'>
                  <img src={logo} alt='logo' class='w-[8rem]' />
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='/'
                  class='hover:text-[#FF5F00] text-[#FF5F00] block font-bold text-[15px]'
                >
                  Home
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='/'
                  class='hover:text-[#FF5F00] text-[#333] block font-bold text-[15px]'
                >
                  Team
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='/'
                  class='hover:text-[#FF5F00] text-[#333] block font-bold text-[15px]'
                >
                  Feature
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='/'
                  class='hover:text-[#FF5F00] text-[#333] block font-bold text-[15px]'
                >
                  Blog
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='/'
                  class='hover:text-[#FF5F00] text-[#333] block font-bold text-[15px]'
                >
                  About
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='/'
                  class='hover:text-[#FF5F00] text-[#333] block font-bold text-[15px]'
                >
                  Contact
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='/'
                  class='hover:text-[#FF5F00] text-[#333] block font-bold text-[15px]'
                >
                  Source
                </a>
              </li>
            </ul>
          </div>
          <div className='flex items-center justify-center gap-4 absolute right-[3rem]'>
            <div className='flex items-center justify-center  gap-2 font-semibold'>
              <FaCar className='text-xl ' />
              Manage bookings
            </div>
            <div className='flex items-center justify-center  gap-2 font-semibold'>
              <TbWorld className='text-xl ' />
              EN | $
            </div>
            <div className='flex items-center justify-center  gap-2 font-semibold'>
              <FaUser className='text-xl ' />
              Login | Register
            </div>
          </div>
          <div class='flex max-lg:ml-auto'>
            <button id='toggleOpen' class='lg:hidden'>
              <svg
                class='w-7 h-7'
                fill='#000'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='h-[600px] flex items-start justify-center '>
          <div className='bg-white w-[90%] flex items-center justify-between rounded-lg px-10 py-6'>
            <form class='max-w-lg w-full'>
              <label
                for='default-search'
                class='text-sm font-semibold text-gray-900 ps-2'
              >
                Pick-up & return
              </label>
              <div class='relative mt-2'>
                <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    class='w-4 h-4 text-gray-500 '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  class='block w-full p-4 ps-10 text-sm text-gray-900 border-[1px] border-gray-300 rounded-xl bg-gray-50 focus:ring-[#FF5F00] focus:border-[#FF5F00] outline-none placeholder-gray-400'
                  placeholder='Airport, city or address'
                  required
                />
                <button
                  type='submit'
                  class='text-white absolute end-2.5 bottom-2.5 bg-[#FF5F00] hover:scale-110 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 '
                >
                  Search
                </button>
              </div>
            </form>

            <div className='flex flex-col items-start justify-start mt-4'>
              <div className='text-sm font-semibold text-gray-900 ps-2'>
                Pick-up date
              </div>
              <DatepickerComponent />
            </div>
            <div className='flex flex-col items-start justify-start mt-4'>
              <div className='text-sm font-semibold text-gray-900 ps-2'>
                Return date
              </div>
              <DatepickerComponent />
            </div>
            <button
              type='submit'
              class='text-white mt-8 bg-[#FF5F00] hover:scale-110 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-lg px-12 py-3 ml-4 '
            >
              Show Cars
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
