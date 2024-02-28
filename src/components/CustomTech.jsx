import React from 'react'
import ShadowBox from './ShadowBox'
import ShadowCircle from './ShadowCircle'

const CustomTech = () => {
  return (
    <div className='relative w-full flex justify-center flex-col items-center '>

      <div className='absolute top-0 left-[25%] animate-pulse'>
        <ShadowBox width={40} height={40} border={"border-gradient-l"} />
      </div>

      <div className='absolute top-0 left-[15%] animate-pulse'>
        <ShadowCircle width={16} height={16} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"} />
      </div>

      <div className='absolute top-36 left-[17%] animate-pulse'>
        <ShadowCircle width={6} height={6} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"}  />
      </div>

      <div className='absolute top-56 left-[10%] animate-pulse'>
        <ShadowCircle width={4} height={4} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"}  />
      </div>

      <div className='absolute top-36 left-[30%] animate-pulse'>
        <ShadowCircle width={4} height={4} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"}  />
      </div>

      <div className='absolute top-64 -left-10 animate-pulse'>
        <ShadowCircle width={96} height={96} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"}  />
      </div>




      <div className='absolute top-5 right-[25%] animate-pulse'>
        <ShadowBox width={40} height={40} border={"border-gradient-r"} />
      </div>

      
      <div className='absolute top-0 right-[15%] animate-pulse'>
        <ShadowCircle width={16} height={16} position={"bl"} fromColor={"#1e0347"} toColor={"#b46ffe"} />
      </div>

      <div className='absolute -top-6 right-[30%] animate-pulse'>
        <ShadowCircle width={5} height={5} position={"bl"} fromColor={"#1e0347"} toColor={"#b46ffe"} />
      </div>

      <div className='absolute top-16 right-[30%] animate-pulse'>
        <ShadowCircle width={3} height={3} position={"bl"} fromColor={"#1e0347"} toColor={"#b46ffe"} />
      </div>

      <div className='absolute top-16 right-0 animate-pulse'>
        <ShadowCircle width={60} height={60} position={"bl"} fromColor={"#1e0347"} toColor={"#b46ffe"} />
      </div>




      <div className='lg:w-[50%]  flex flex-col text-white gap-y-10'>
        <h1 className='text-7xl font-bold '>CUSTOM</h1>
        <h1 className='text-7xl font-bold text-end lg:pr-10'>TECHNOLOGY</h1>
      </div>

      <div className='my-16 text-white flex flex-col gap-y-8 text-lg'>
        <p>hello I'm designing keepcodein website with tailwindcss</p>
        <div className='flex justify-center gap-4'>
          <div className="">
            <button class="px-6 py-2 bg-gradient-to-r from-[#FC466B]/60 to-[#3F5EFB]/60 text-white font-semibold rounded-full transition-transform transform-gpu  hover:shadow-lg">
              Apply Now
            </button>
          </div>

          <div className="bg-gradient-to-r p-[1px] from-[#FC466B] to-[#3F5EFB] rounded-full">
            <button class="px-6 py-2 bg-[#110D2E] rounded-full text-white font-semibold  transition-transform transform-gpu  hover:shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomTech