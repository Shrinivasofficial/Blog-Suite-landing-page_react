import React from 'react'

export const Table = () => {
  return (
    <div className='m-12 flex flex-col items-center justify-center'>
     <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white'>
        Your Writing Speaks <i className='font-medium text-violet-600'>louder</i>
      </h1>
      <div className='relative overflow-x-auto mt-8 shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope='col' className='px-6 py-3'>
                        Blog Title
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Category
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Impressions
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Engagements
                    </th>
                    <th scope='col' className='px-6 py-3'>
                       <span className='sr-only'>View</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Paris 2024 Olympics
                    </th>
                    <td className='py-4 px-6'>
                        Sports
                    </td>
                    <td className='py-4 px-6'>
                        1999
                    </td>
                    <td className='py-4 px-6'>
                        1000
                    </td>
                    <td className='py-4 px-6 text-right'>
                        <a href='/' className='font-medium text-violet-600'>View</a>
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Paris 2024 Olympics
                    </th>
                    <td className='py-4 px-6'>
                        Sports
                    </td>
                    <td className='py-4 px-6'>
                        1999
                    </td>
                    <td className='py-4 px-6'>
                        1000
                    </td>
                    <td className='py-4 px-6 text-right'>
                        <a href='/' className='font-medium text-violet-600'>View</a>
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Paris 2024 Olympics
                    </th>
                    <td className='py-4 px-6'>
                        Sports
                    </td>
                    <td className='py-4 px-6'>
                        1999
                    </td>
                    <td className='py-4 px-6'>
                        1000
                    </td>
                    <td className='py-4 px-6 text-right'>
                        <a href='/' className='font-medium text-violet-600'>View</a>
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Paris 2024 Olympics
                    </th>
                    <td className='py-4 px-6'>
                        Sports
                    </td>
                    <td className='py-4 px-6'>
                        1999
                    </td>
                    <td className='py-4 px-6'>
                        1000
                    </td>
                    <td className='py-4 px-6 text-right'>
                        <a href='/' className='font-medium text-violet-600'>View</a>
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Paris 2024 Olympics
                    </th>
                    <td className='py-4 px-6'>
                        Sports
                    </td>
                    <td className='py-4 px-6'>
                        1999
                    </td>
                    <td className='py-4 px-6'>
                        1000
                    </td>
                    <td className='py-4 px-6 text-right'>
                        <a href='/' className='font-medium text-violet-600'>View</a>
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Paris 2024 Olympics
                    </th>
                    <td className='py-4 px-6'>
                        Sports
                    </td>
                    <td className='py-4 px-6'>
                        1999
                    </td>
                    <td className='py-4 px-6'>
                        1000
                    </td>
                    <td className='py-4 px-6 text-right'>
                        <a href='/' className='font-medium text-violet-600'>View</a>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
