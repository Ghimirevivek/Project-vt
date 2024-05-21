import React, { useState } from 'react';
import logo from '../../Assets/logo.jpg';
import DatepickerComponent from '../DatePicker/DatePickerComponent';
import { FaUser } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0vh');

  const handleClick = () => {
    setToggleMenu(true);
    setTimeout(() => {
      setMenuHeight('100vh');
    }, 10);
  };

  return (
    <header class='shadow-md font-sans tracking-wide relative z-50'>
      <section class='py-1 bg-[#FF5F00] text-black text-right px-2 sm:px-10 flex items-center justify-center'>
        <p class='text-[10px] lg:text-sm '>
          <strong class='mx-2 sm:mx-3'>Address:</strong>SWF New York 185669
          <strong class='mx-2 sm:mx-3'>Contact No:</strong>1800333665
        </p>
      </section>

      <div className='bg-banner w-full h-full bg-cover bg-center bg-no-repeat '>
        <div class='flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-transparent min-h-[70px] relative'>
          <div onClick={handleClick}>
            <button
              id='toggleOpen'
              className='lg:hidden bg-black rounded-full p-1'
            >
              <svg
                class='w-8 h-8'
                fill='#fff'
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

          <a href='/'>
            <img src={logo} alt='logo' class='w-[10rem]' />
          </a>

          <div
            id='collapseMenu'
            class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 '
          >
            <ul class='hidden lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 mr-[15rem]'>
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
            {toggleMenu && (
              <ul
                style={{
                  height: menuHeight,
                  transition: 'height 0.5s ease-in-out',
                }}
                className={`fixed top-0 left-0  py-10 text-xl px-6 font-bold w-[70%] sm:w-[50%] lg:w-[30%] bg-white z-50 mr-[15rem] `}
              >
                <li class='mb-6 flex items-center justify-start gap-6'>
                  <div onClick={() => setToggleMenu(false)} className=''>
                    <button
                      id='toggleOpen'
                      className='bg-black rounded-full px-3 py-1 text-white'
                    >
                      X
                    </button>
                  </div>
                  <a href='/'>
                    <img src={logo} alt='logo' class='w-[8rem]' />
                    <p>Sublimauto</p>
                  </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-3'>
                  <a
                    href='/'
                    class='hover:text-[#FF5F00] text-[#FF5F00] block font-bold my-4'
                  >
                    Home
                  </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-3'>
                  <a
                    href='/'
                    class='hover:text-[#FF5F00] text-[#333] block font-bold my-4'
                  >
                    Team
                  </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-3'>
                  <a
                    href='/'
                    class='hover:text-[#FF5F00] text-[#333] block font-bold my-4'
                  >
                    Feature
                  </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-3'>
                  <a
                    href='/'
                    class='hover:text-[#FF5F00] text-[#333] block font-bold my-4'
                  >
                    Blog
                  </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-3'>
                  <a
                    href='/'
                    class='hover:text-[#FF5F00] text-[#333] block font-bold my-4'
                  >
                    About
                  </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-3'>
                  <a
                    href='/'
                    class='hover:text-[#FF5F00] text-[#333] block font-bold my-4'
                  >
                    Contact
                  </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-3'>
                  <a
                    href='/'
                    class='hover:text-[#FF5F00] text-[#333] block font-bold my-4'
                  >
                    Source
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className='flex items-center justify-center gap-4 absolute right-[3rem]'>
            <div className='flex items-center justify-center  gap-2 font-semibold'>
              <FaCar className='text-xl' />
              <span className='hidden lg:block'> Manage bookings</span>
            </div>
            <div className='flex items-center justify-center  gap-2 font-semibold'>
              <TbWorld className='text-xl ' />
              <span className='hidden lg:block'> EN | $</span>
            </div>
            <div className='flex items-center justify-center  gap-2 font-semibold'>
              <FaUser className='text-xl ' />
              <span className='hidden lg:block'> Login | Register</span>
            </div>
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
