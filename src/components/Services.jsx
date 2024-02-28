import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div>

            <div className='flex justify-center items-center py-12 mt-16 flex-col text-white gap-y-4'>
                <h1 className='text-3xl font-semibold'>Our Most in Demand Servuce</h1>
                <p className='mt-4 w-[50%] text-center'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas molestias
                </p>
            </div>

            <div className='lg:flex lg:flex-wrap lg:px-20 lg:gap-5 lg:justify-center '>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>

        </div>
    )
}

export default Services