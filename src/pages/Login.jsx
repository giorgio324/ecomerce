import { FcGoogle } from 'react-icons/fc';
import { loginUserWithGoogle } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginButton = ({ text, icon, onClick }) => {
  return (
    <button
      className='flex justify-center items-center gap-4 py-2 px-4 hover:border-blue-400 transition-colors duration-150 ease-linear border rounded-md capitalize'
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth); // Moved outside useEffect
  const navigate = useNavigate(); // Moved outside useEffect

  const handleLoginGoogle = () => {
    dispatch(loginUserWithGoogle());
  };

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, [authenticated]); // Added authenticated as a dependency

  return (
    <section className='w-full flex flex-col items-center justify-center gap-10 py-20 min-h-[550px] text-base lg:text-xl '>
      <LoginButton
        text='Login with Google'
        icon={<FcGoogle className='text-3xl md:text-4xl' />}
        onClick={handleLoginGoogle}
      />
    </section>
  );
};
export default Login;
