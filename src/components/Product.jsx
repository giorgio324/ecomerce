import { useState } from 'react';

const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const truncatedTitle =
    product.title.length > 30
      ? product.title.slice(0, 18) + '...'
      : product.title;
  return (
    <div
      className='group flex flex-col border'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-96 object-contain group-hover:scale-105 duration-500'
        />
      </div>
      <div className='w-full border-t px-2 py-4 flex justify-between gap-x-4  items-center flex-grow'>
        <div className='max-w-[130px] break-words flex flex-col gap-y-1'>
          <h2 className='font-bold text-sm'>{truncatedTitle}</h2>
          <p className='text-xs text-gray-500'>{product.category}</p>
        </div>
        <div className='relative w-1/2 text-center h-full flex justify-center items-center'>
          {isHovered ? (
            <button
              className='text-gray-500 hover:text-gray-900 hover:bg-slate-200 transform transition-all duration-300 text-xs h-full w-full border'
              onClick={() => console.log('Add to Cart')}
            >
              Add to Cart
            </button>
          ) : (
            <p>${product.price}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
