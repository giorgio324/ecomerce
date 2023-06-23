const CustomButton = ({ text, onClick, px, py, reverseColors }) => {
  if (reverseColors)
    return (
      <button
        className={`group relative border px-${px || 0} py-${py || 0}`}
        onClick={onClick}
      >
        <span className='absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full'></span>
        <span className='relative z-10 text-white transition-colors duration-500 ease-in-out group-hover:text-black text-sm md:text-base lg:text-lg'>
          {text}
        </span>
      </button>
    );
  return (
    <button
      className={`group relative border px-${px || 0} py-${py || 0}`}
      onClick={onClick}
    >
      <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
      <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white text-sm md:text-base lg:text-lg'>
        {text}
      </span>
    </button>
  );
};
export default CustomButton;
