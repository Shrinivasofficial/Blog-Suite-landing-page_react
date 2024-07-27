import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-white rounded-lg shadow dark:bg-gray-900 m-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
          <a href='/' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
            <h2 className='text-violet-500 text-2xl font-semibold'>Blog Suite</h2>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='/' className='hover:underline me-4 md:me-6'>About</a>
            </li>
            <li>
              <a href='/' className='hover:underline me-4 md:me-6'>Blogs</a>
            </li>
            <li>
              <a href='/' className='hover:underline me-4 md:me-6'>Services</a>
            </li>
            <li>
              <a href='/' className='hover:underline me-4 md:me-6'>Contact</a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border border-gray-200 dark:border-gray-700' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024 <a href='/' className='hover:underline'>All Rights Reserved.</a>
        </span>
      </div>
    </footer>
  );
};
