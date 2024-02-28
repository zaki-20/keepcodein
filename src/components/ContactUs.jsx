import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div >
            <div className='lg:flex lg:px-60 gap-x-10 '>
                <div className=' flex-grow'>
                    <section className="w-full bg-gradient-to-l  from-[#110D2E]  to-[#fc466a4a]/20  rounded-md shadow-md  p-16">
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h2 className="text-2xl font-semibold  capitalize text-white">Drop Us Your Message</h2>
                            <p className='text-gray-400 '>Freely contact with us anytime. We're available here for you.</p>
                        </div>
                        <form>
                            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                                <div className='col-span-2 lg:col-span-1'>
                                    <input id="username" type="text" className=" w-full px-4 py-2 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient  focus:outline-none focus:ring-0" placeholder='enter your name' />
                                </div>

                                <div className='col-span-2 lg:col-span-1'>
                                    <input id="username" type="text" className=" w-full px-4 py-2 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient  focus:outline-none focus:ring-0" placeholder='enter your name' />
                                </div>

                                <div className='col-span-2'>
                                    <input id="username" type="text" className=" w-full px-4 py-2 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient  focus:outline-none focus:ring-0" placeholder='enter your name' />
                                </div>
                                <div className='col-span-2 '>
                                    <textarea id="username" type="text" className=" w-full px-4 py-2 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient  focus:outline-none focus:ring-0" placeholder='enter your name ' rows={5} />
                                </div>
                            </div>

                            <div className="flex justify-start mt-6">
                                <button className="px-6 py-2 leading-5 rounded-full bg-[#6318F1] text-white transition-colors duration-200 transform focus:outline-none focus:bg-gray-600">Send Messages</button>
                            </div>
                        </form>
                    </section>
                </div>


                <div className='  lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border'>

                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaPhoneAlt size={25} className='text-blue-700 my-2'/>
                        <div className='text-white text-sm py-1'>Phone</div>
                        <div className='text-gray-400 text-xs'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                   
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaPhoneAlt size={25} className='text-blue-700 my-2'/>
                        <div className='text-white text-sm py-1'>Phone</div>
                        <div className='text-gray-400 text-xs'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                    
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaPhoneAlt size={25} className='text-blue-700 my-2'/>
                        <div className='text-white text-sm py-1'>Phone</div>
                        <div className='text-gray-400 text-xs'>0310 - 7756294</div>
                      </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactUs