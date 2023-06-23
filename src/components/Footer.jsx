import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsPaypal, BsPersonFill, BsPlus } from 'react-icons/bs';
import CustomButton from './customElements/CustomButton';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='bg-black text-[#949494] py-20'>
      <div className='max-w-screen-xl mx-auto px-10 grid grid-cols-4'>
        {/* social media and info */}
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold font-tiltPrism text-2xl text-white'>
            SHOPPY
          </h1>
          <p className=''>&copy; SHOPPY {year}</p>
          <div className='flex gap-4'>
            <a href='#'>
              <FaFacebookF className='text-gray-400 hover:text-white transition-colors duration-150 ease-linear text-lg' />
            </a>
            <a href='#'>
              <FaInstagram className='text-gray-400 hover:text-white transition-colors duration-150 ease-linear text-lg' />
            </a>
            <a href='#'>
              <FaTwitter className='text-gray-400 hover:text-white transition-colors duration-150 ease-linear text-lg' />
            </a>
            <a href='#'>
              <FaYoutube className='text-gray-400 hover:text-white transition-colors duration-150 ease-linear text-lg' />
            </a>
          </div>
        </div>
        {/* location  */}
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-white text-xl'>Locate Us</h1>
          <p className=' text-lg'>123, Main Street</p>
          <p className=' text-lg'>New York, NY 10001</p>
          <p className=' text-lg'>United States</p>
        </div>
        {/* Profile */}
        <div className='flex flex-col gap-4 capitalize'>
          <h1 className='font-bold text-white text-xl'>Profile</h1>
          <div className='flex gap-2 group items-center'>
            <BsPersonFill className='text-gray-400 text-lg group-hover:text-white transition-colors duration-150 ease-linear' />
            <a
              href='#'
              className='text-gray-400 text-lg group-hover:text-white transition-colors duration-150 ease-linear'
            >
              my account
            </a>
          </div>
          <div className='flex gap-2 group items-center'>
            <BsPaypal className='text-gray-400 text-lg group-hover:text-white transition-colors duration-150 ease-linear' />
            <a
              href='#'
              className='text-gray-400 text-lg group-hover:text-white transition-colors duration-150 ease-linear'
            >
              Checkout
            </a>
          </div>
          <div className='flex gap-2 group items-center'>
            <MdLocationOn className='text-gray-400 text-lg group-hover:text-white transition-colors duration-150 ease-linear' />
            <a
              href='#'
              className='text-gray-400 text-lg group-hover:text-white transition-colors duration-150 ease-linear'
            >
              order tracking
            </a>
          </div>

          <div className='flex gap-2 group items-center'>
            <BsPlus className='text-gray-400 text-lg group-hover:text-white transition-colors duration-150 ease-linear' />
            <a
              href='#'
              className='text-gray-400 group-hover:text-white transition-colors duration-150 ease-linear'
            >
              help & support
            </a>
          </div>
        </div>
        {/* Newsletter */}
        <div className='flex flex-col justify-center'>
          <input
            type='email'
            name='emailletter'
            id='emailletter'
            className='bg-transparent border px-4 py-2
             text-sm outline-none'
            placeholder='Enter your email'
          />
          <CustomButton text='Subscribe' px={4} py={2} reverseColors />
        </div>
      </div>
    </div>
  );
};
export default Footer;
