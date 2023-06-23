import { BsTrash } from 'react-icons/bs';

const CartItem = ({ cartItem }) => {
  const handleQuantityDecrease = () => {
    console.log('Decrease Quantity');
  };

  const handleQuantityIncrease = () => {
    console.log('Increase Quantity');
  };

  return (
    <div className='flex lg:flex-row flex-col gap-4 lg:justify-between'>
      <div className='flex flex-col md:flex-row gap-4 justify-center flex-grow'>
        {/* First column */}
        <div className='flex gap-2 items-center'>
          <p className='font-bold text-xl cursor-pointer'>
            <BsTrash />
          </p>
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className='w-full h-32 md:min-w-[8rem] md:min-h-[8rem] min-h-[5rem] min-w-[5rem] object-contain justify-center flex'
          />
        </div>

        {/* Second column */}
        <div className='flex lg:items-center items-baseline w-full justify-between md:justify-normal lg:flex-row md:flex-col flex-row gap-2'>
          <p className='font-semibold break-words w-max max-w-[10rem] md:max-w-[14rem]'>
            {cartItem.title}
          </p>
          <p className='min-w-fit'>${cartItem.price}</p>
        </div>
      </div>
      {/* Third column */}
      <div className='flex md:flex-row flex-col lg:min-w-max md:items-center gap-4 flex-grow lg:w-full lg:justify-end'>
        <div className='border flex gap-4 text-gray-500 p-4 justify-center items-center'>
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
        <p className='font-semibold min-w-fit'>
          $ {cartItem.price * cartItem.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
