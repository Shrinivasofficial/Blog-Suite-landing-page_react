import React from 'react';

export const Cards = () => {
  const cardContent = [
    {
      title: 'Olympics Paris 2024',
      description: 'Here are the biggest events of Paris 2024 Olympics so far, in Paris July 2024.',
      link: '/',
    },
    {
      title: 'Olympics Paris 2024',
      description: 'Here are the biggest events of Paris 2024 Olympics so far, in Paris July 2024.',
      link: '/',
    },
    {
      title: 'Olympics Paris 2024',
      description: 'Here are the biggest events of Paris 2024 Olympics so far, in Paris July 2024.',
      link: '/',
    },
  ];

  return (
    <div className='flex flex-wrap justify-center gap-6 pb-24'>
      {cardContent.map((card, index) => (
        <div key={index} className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href={card.link}>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {card.title}
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{card.description}</p>
          <a
            href={card.link}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-700 dark:focus:ring-violet-800'
          >
            Read more
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='https://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='white'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};
