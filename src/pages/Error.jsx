import { Link } from 'react-router-dom';
import CustomButton from '../components/customElements/CustomButton';
const Error = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-10 py-20 min-h-[550px] text-base lg:text-xl px-5 md:px-10'>
      <h1 className='text-5xl md:text-8xl font-bold'>404</h1>
      <h2 className='text-2xl md:text-3xl font-semibold text-center'>
        Page not found. Go back to home page.
      </h2>
      <Link to='/'>
        <CustomButton text='Go back' px={4} py={2} />
      </Link>
    </section>
  );
};
export default Error;
