import React from 'react'

const ServiceCard = () => {
    return (
        <div className='bg-gradient-to-l from-[#59D3AA] to-[#050023] flex justify-center items-center lg:w-[48%]  border-l-8 border-[#59D3AA]'>
            <div className=' flex bg-[#050023] items-center m-2' >
                <div className='text-white w-[65%] flex flex-col gap-x-4 gap-y-8 px-4 py-10'>
                    <div>
                        <h1 className='text-3xl font-semibold'>hello heading</h1>
                    </div>
                    <div>
                        <p >
                            hello ia m a paragraph, hello ia m a paragraph, hello ia m a paragraph,
                            hello ia m a paragraph, hello ia m a paragraph,
                        </p>
                    </div>
                    <div>
                        <button className='text-white font-bold rounded-full  px-6 py-2 bg-[#6318F1]'>click here</button>
                    </div>
                </div>

                <div className='  w-[35%] h-full px-2'>
                    <iframe className='w-full h-full' title='gif' src="https://giphy.com/embed/AWNxDbtHGIJDW"  >
                    </iframe>
                </div>
            </div>
        </div>

    )
}

export default ServiceCard