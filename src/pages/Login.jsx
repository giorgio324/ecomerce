import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
const LoginButton = ({ text, icon }) => {
  return (
    <button className='flex justify-center items-center gap-4 py-2 px-4 hover:border-blue-400 transition-colors duration-150 ease-linear border rounded-md capitalize'>
      {icon}
      <span>{text}</span>
    </button>
  );
};

const Login = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-10 py-20 min-h-[550px] text-base lg:text-xl '>
      <LoginButton
        text='Login with Google'
        icon={<FcGoogle className='text-3xl md:text-4xl' />}
      />
      <LoginButton
        text='Login with Github'
        icon={<BsGithub className='text-3xl md:text-4xl' />}
      />
    </section>
  );
};
export default Login;
