import React, { useEffect } from 'react';


export const Home = () => {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-20 sm:mt-28 md:mt-32 py-20 sm:py-40'>
      <h1
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 2}}
        className='mb-4 text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white'>
        Your New Blog <i className='font-medium text-violet-600'>Spot</i>
      </h1>
      <p className='mt-3 mb-6 text-base sm:text-lg lg:text-xl font-normal text-gray-500 sm:px-8 lg:px-16 xl:px-32 dark:text-gray-400 text-center'>
        Read, Write, Share the latest blogs on chosen specific domain of your interest.
      </p>
      <a href='/' className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-900'>
        Start for free
      </a>
    </div>
  );
};
