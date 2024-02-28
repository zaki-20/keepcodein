import React from 'react'
import Cards from './Cards'

const Explore = () => {
  return (
    <>

      <div className=' order- flex lg:justify-between justify-center flex-wrap gap-x-20 gap-y-5 lg:items-center text-white lg:px-32 pt-20 lg:pt-44'>

        <h1 className='text-3xl order-1 md:order-1 text-white font-semibold'>Case Studies</h1>
        <div className='order-3 md:order-2'>

          <ul className='flex gap-x-4 items-center justify-center'>
            <li className='cursor-pointer hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2'>All</li>
            <li className='cursor-pointer hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2'>Fashion</li>
            <li className='cursor-pointer hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2'>Music</li>
            <li className='cursor-pointer hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2'>Video</li>
            <li className='cursor-pointer hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2'>Game</li>
            <li className='cursor-pointer hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2'>Real Estate</li>
          </ul>

        </div>

        <div className='order-2 md:order-3'>
          <button class="px-6 py-2 bg-[#6318F1] text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg">
            Apply Now
          </button>
        </div>

      </div>

      <div>
        <div className='flex flex-wrap gap-x-10 px-32 gap-y-10 mt-10 justify-center'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div></>

  )
}

export default Explore