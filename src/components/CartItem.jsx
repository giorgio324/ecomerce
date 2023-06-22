import { BsTrash } from 'react-icons/bs';

const CartItem = ({ cartItem }) => {
  const handleQuantityDecrease = () => {
    console.log('Decrease Quantity');
  };

  const handleQuantityIncrease = () => {
    console.log('Increase Quantity');
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between text-sm xl:text-base'>
      <div className='flex gap-4 justify-center col-span-5 flex-grow'>
        {/* First column */}
        <div className='flex gap-2 items-center '>
          <p className='font-bold text-xl cursor-pointer'>
            <BsTrash />
          </p>
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className='w-[100px] object-cover'
          />
        </div>

        {/* Second column */}
        <div className='flex flex-grow items-center justify-center gap-4  text-left '>
          <p className='font-semibold w-[120px] break-words'>
            {cartItem.title}
          </p>
          <p className=''>$ {cartItem.price}</p>
        </div>
      </div>
      {/* Third column */}
      <div className='flex justify-center items-center gap-4 col-span-4 flex-grow'>
        <div className='border flex gap-4 text-gray-500 p-4 justify-center items-center col-span-3 '>
          <p>Quantity</p>
          <div className='flex gap-2'>
            <button
              className='group relative border px-3'
              onClick={handleQuantityDecrease}
            >
              <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
              <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white'>
                -
              </span>
            </button>
            <p className='font-semibold'>{cartItem.quantity}</p>
            <button
              className='group relative border px-3'
              onClick={handleQuantityIncrease}
            >
              <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
              <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white'>
                +
              </span>
            </button>
          </div>
        </div>

        {/* Fourth column */}
        <p className='font-semibold'>$ {cartItem.price * cartItem.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
