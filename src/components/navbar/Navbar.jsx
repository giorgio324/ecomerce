import { BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import NavLinkItem from './NavLinkItem';
import CustomButton from '../customElements/CustomButton';
import MobileNavbar from './MobileNavbar';
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const uniqueCartItems = cartItems.length;
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    console.log(isNavbarOpen);
  };

  return (
    <nav className='w-full h-20 bg-white border-b border-b-gray-800 fixed top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between px-5 md:px-10'>
        <h1 className='font-bold font-tiltPrism text-2xl md:text-3xl'>
          <Link to='/'>SHOPPY</Link>
        </h1>
        <div className='flex gap-10'>
          <ul className='hidden  items-center gap-6 md:flex'>
            <NavLinkItem to={'/'} text={'Home'} />
            <NavLinkItem to={'/pages'} text={'Pages'} />
            <NavLinkItem to={'/shop'} text={'Shop'} />
            <NavLinkItem to={'/element'} text={'Element'} />
            <NavLinkItem to={'/blog'} text={'Blog'} />
          </ul>
          <div className='flex gap-8'>
            <Link to={'/cart'} className='relative cursor-pointer'>
              <BsCart className='text-3xl text-black' />
              <span className='absolute -top-2 -right-2 bg-orange-900 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>
                {uniqueCartItems}
              </span>
            </Link>
            <div className='hidden md:block'>
              <CustomButton
                text={'Login'}
                px={3}
                py={1}
                onClick={() => console.log('login clicked')}
              />
            </div>
            <div className='md:hidden'>
              <button>
                <GiHamburgerMenu
                  className='text-3xl text-black'
                  onClick={toggleNavbar}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileNavbar isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </nav>
  );
};
export default Navbar;
