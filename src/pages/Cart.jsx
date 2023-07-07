import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../slices/cartSlice';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Cart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    setSubTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    setTotal(subTotal > 300 ? subTotal : subTotal + cartItems.length * 20);
  }, [cartItems]);
  if (cartItems.length === 0) {
    return (
      <section className='max-w-screen-xl mx-auto px-5 md:px-10 py-20 flex flex-col justify-center items-center min-h-[550px]'>
        <div className='w-full flex flex-col gap-10 justify-center items-center text-xl lg:text-2xl xl:text-3xl max-w-md'>
          <h1 className='uppercase'>Cart is empty</h1>
          <Link
            to={'/'}
            className='bg-black text-white py-3 px-8 rounded-sm hover:bg-gray-800 transition-all font-semibold duration-150 ease-linear w-full text-sm md:text-base lg:text-lg text-center capitalize'
          >
            go back to Shopping
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className='max-w-screen-xl mx-auto px-5 md:px-10 py-20 flex flex-col md:flex-row gap-8 lg:gap-0 xl:gap-8'>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold py-4'>Cart</h1>
          <button
            className='bg-red-400 hover:bg-red-700 transition-colors duration-150 ease-linear px-4 py-2 font-semibold lg:mr-4 xl:mr-12 text-white'
            onClick={handleClearCart}
          >
            CLEAR CART
          </button>
        </div>
        <div className='flex flex-col gap-4 mt-8 md:mt-4'>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <div className='w-full bg-slate-100 flex flex-col justify-start px-4 text-lg md:text-base lg:text-sm xl:text-base lg:max-w-[24rem]'>
        <h1 className='text-2xl font-semibold py-4'>Cart Total</h1>
        <div className='flex flex-col gap-4 py-4'>
          <div className='flex gap-4 items-center'>
            <p>Subtotal</p>
            <p className='font-bold w-full text-start'>
              $ {subTotal.toFixed(2)}
            </p>
          </div>
          <div className='flex flex-col gap-4 items-start py-4 md:text-base text-sm'>
            <p>Shipping : {subTotal > 300 ? 'free' : 'paid'}</p>
            <p className='min-h-[80px]'>
              {subTotal > 300
                ? 'you are eligable for free shipping after $300 of purchase'
                : 'you are not eligable for free shipping spend $300 to get free shipping. each unique item costs $20 to ship'}
            </p>
          </div>
          <div className='mt-6 flex justify-between items-center border-t border-black py-6'>
            <p>Total</p>
            <p className='font-bold'>$ {total.toFixed(2)}</p>
          </div>
          <div className='flex flex-col items-center '>
            <button className='bg-black text-white py-3 px-8 rounded-sm hover:bg-gray-800 transition-all font-semibold duration-150 ease-linear w-full  text-sm md:text-base lg:text-lg'>
              Checkout
            </button>
            <span className='py-2 font-semibold text-sm md:text-base lg:text-lg '>
              or
            </span>
            <Link
              to={'/'}
              className='bg-black text-white py-3 px-8 rounded-sm hover:bg-gray-800 transition-all font-semibold duration-150 ease-linear w-full text-sm md:text-base lg:text-lg text-center'
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
