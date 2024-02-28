import React from 'react'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css"
import { TbBrandRedux } from "react-icons/tb";
import TechCards from './TechCards';

const MarqueeSection = () => {

  return (
    <>
      <div className='flex justify-center items-center py-4 mt-10 '>
        <h1 className='text-3xl font-semibold text-white '>
        Skilled across 25+ updated tech stacks
        </h1>
      </div>
      <div className='flex flex-col  gap-y-5 py-10 bg-[#0d0924]'>

        <Marquee
          fade={true}
          direction="left"
          reverse={false}
          pauseOnHover={true}
          className="" // pass class to change gap or speed
          innerClassName="" // pass class to change gap or speed
        >
          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300 " />} title="Redux" />
          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="PHP" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Laravel" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="React" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="WordPress" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Graphics" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Animations" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Nodejs" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Redux" />

        </Marquee>
        <Marquee
          fade={true}
          direction="left"
          reverse={true}
          pauseOnHover={true}
          className="" // pass class to change gap or speed
          innerClassName="" // pass class to change gap or speed
        >
          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300 " />} title="Redux" />
          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="PHP" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Laravel" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="React" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="WordPress" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Graphics" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Animations" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Nodejs" />

          <TechCards icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title="Redux" />

        </Marquee>
      </div>
    </>
  )
}

export default MarqueeSection