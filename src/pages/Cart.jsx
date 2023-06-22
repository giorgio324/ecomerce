import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <section className='max-w-screen-xl mx-auto px-10 py-20 grid grid-cols-3 gap-8'>
      <div className='col-span-2'>
        <h1 className='text-2xl font-semibold py-4'>Cart</h1>
        <div className='flex flex-col gap-4'>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <div className='col-span-1 bg-slate-100 flex flex-col justify-start p-4 text-sm xl:text-base'>
        <h1 className='text-2xl font-semibold py-4'>Cart Total</h1>
        <div className='flex flex-col gap-4 py-4'>
          <div className='flex gap-4 items-center'>
            <p>Subtotal</p>
            <p className='font-bold'>$ 0.00</p>
          </div>
          <div className='flex gap-4 items-start py-4'>
            <p>Shipping</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              delectus libero accusamus aliquam ea
            </p>
          </div>
          <div className='mt-6 flex justify-between items-center border-t border-black py-6'>
            <p>Total</p>
            <p className='font-bold'>$ 0.00</p>
          </div>
          <button className='bg-black text-white py-4 px-8 rounded-md hover:bg-gray-800 transition-all duration-150 ease-linear'>
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};
export default Cart;
