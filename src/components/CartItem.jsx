import { BsTrash } from 'react-icons/bs';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  addToCart,
} from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleQuantityDecrease = () => {
    dispatch(decreaseQuantity(cartItem));
  };

  const handleQuantityIncrease = () => {
    dispatch(increaseQuantity(cartItem));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className='flex lg:flex-row flex-col gap-4 lg:justify-between'>
      <div className='flex flex-col md:flex-row gap-4 justify-center flex-grow w-full'>
        {/* First column */}
        <div className='flex gap-2 items-center'>
          <p
            className='font-bold text-2xl cursor-pointer border lg:border-0 p-1'
            onClick={handleRemoveFromCart}
          >
            <BsTrash />
          </p>
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className='w-full h-32 md:min-w-[8rem] md:min-h-[8rem] lg:min-w-[6rem] lg:min-h-[6rem] min-h-[5rem] min-w-[5rem] object-contain justify-center flex'
          />
        </div>

        {/* Second column */}
        <div className='flex lg:items-center items-baseline w-full justify-between lg:flex-row md:flex-col flex-row gap-2'>
          <p className='font-semibold break-words w-full text-lg md:text-base lg:text-sm min-w-[100px]'>
            {cartItem.title}
          </p>
          <p className='w-full text-right md:text-left lg:text-center'>
            ${cartItem.price.toFixed(2)}
          </p>
        </div>
      </div>
      {/* Third column */}
      <div className='flex md:flex-row flex-col lg:min-w-max md:items-center gap-4 flex-grow lg:w-full lg:justify-end'>
        <div className='border flex gap-4 text-gray-500 p-4 justify-center items-center'>
          <p>Quantity</p>
          <div className='flex justify-center items-center'>
            <button
              className='group relative border px-3'
              onClick={handleQuantityDecrease}
            >
              <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
              <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white'>
                -
              </span>
            </button>
            <p className='font-semibold w-8 text-center '>
              {cartItem.quantity}
            </p>
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
        <p className='font-semibold min-w-fit md:px-6 md:w-full flex gap-2'>
          <span className='md:hidden'>total:</span>$
          {(cartItem.price * cartItem.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
