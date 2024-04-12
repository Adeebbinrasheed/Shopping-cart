import React from 'react'

const NewsLetter = () => {
  return (
    <section className='bg-white py-12 xl:py-28 px-3 '>
        <div className='flex flex-col items-center gap-y-5 w-full  mx-auto max-w-[666px]'>
            <h1 className='text-3xl font-semibold'>Get Exclusive offers on your Email</h1>
            <h4 className='font-medium text-md uppercase'>Subscribe to our newsletter and stay updated</h4>
            <div className='flex justify-between   ring-1 rounded-3xl ring-slate-900/5 hover:ring-slate-900/15 w-full max-w-[588px] bg-gray-100 '>
                <input type="email" placeholder='Your Email address' className='bg-transparent border-none outline-none ml-8 w-full' />
                <button className='rounded-3xl p-2 bg-gray-700 text-white'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter