import { BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const uniqueCartItems = cartItems.length;
  return (
    <nav className='w-full h-20 bg-white border-b border-b-gray-800 sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between px-5 md:px-10'>
        <h1 className='font-bold font-tiltPrism text-2xl md:text-3xl'>
          <Link to='/'>SHOPPY</Link>
        </h1>
        <div className='flex gap-10'>
          <ul className='hidden  items-center gap-6 md:flex'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer transition-all '>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer transition-all '>
              Pages
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer transition-all '>
              Shop
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer transition-all '>
              Element
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer transition-all '>
              Blog
            </li>
          </ul>
          <div className='flex gap-4 md:gap-8'>
            <Link to={'/cart'} className='relative cursor-pointer'>
              <BsCart className='text-3xl text-black' />
              <span className='absolute -top-2 -right-2 bg-orange-900 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>
                {uniqueCartItems}
              </span>
            </Link>

            <button
              className='group hidden md:block relative border px-3 py-1'
              onClick={() => console.log('login')}
            >
              <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
              <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white'>
                Log In
              </span>
            </button>
            <button>
              <GiHamburgerMenu className='text-3xl text-black' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
