import { BsCart } from 'react-icons/bs';
const Navbar = () => {
  return (
    <nav className='w-full h-20 bg-white border-b border-b-gray-800'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between px-12'>
        <h1 className='font-bold font-tiltPrism text-3xl'>SHOPPY</h1>
        <div className='flex gap-10'>
          <ul className='hidden  items-center gap-6 md:flex'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer transition-all '>
              Home
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
          <div className='flex gap-8'>
            <div className='relative cursor-pointer'>
              <BsCart className='text-3xl text-black' />
              <span className='absolute -top-2 -right-2 bg-orange-900 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>
                0
              </span>
            </div>
            <div>
              <button className='bg-orange-900 text-white px-4 py-1 rounded-lg hover:bg-orange-600 hover:text-gray-200 transition-all duration-300 ease-in-out'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
