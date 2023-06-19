import { useState } from 'react';
import { bannerData } from '../data/banner/data';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(bannerData.length - 1);
    }
  };

  const nextSlide = () => {
    if (index < bannerData.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-full h-full flex relative'>
        {bannerData.map((item, idx) => {
          const imageStyle = {
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 0.5s ease',
          };
          return (
            <div
              key={idx}
              className='w-full h-full flex-shrink-0 max-h-[720px] overflow-hidden'
              style={imageStyle}
            >
              <img
                src={item}
                alt={item}
                className='w-full h-full object-cover'
              />
            </div>
          );
        })}
        <HiArrowLeft
          className='absolute top-1/2 left-[40px] text-4xl text-white cursor-pointer
          border border-gray-700 hover:bg-gray-600 hover:text-white transition-all
          duration-300 ease-in-out'
          onClick={prevSlide}
        />
        <HiArrowRight
          className='absolute top-1/2 right-[40px] text-4xl text-white cursor-pointer border border-gray-700 hover:bg-gray-600 hover:text-white transition-all
          duration-300 ease-in-out'
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Banner;
