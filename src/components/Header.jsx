
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoSvg from '../assets/keepcodein.svg'; // Adjust the path as per your directory structure
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";




export default function Header() {
  return ( 
    <Disclosure as="nav" className="bg-[#110D2E] fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between ">


              <div className="">
                <img
                  className="block h-10 w-auto"
                  src={logoSvg}
                  alt='img'
                />
              </div>

              <div className="lg:flex justify-center px-2 hidden lg:ml-6 ">
                <div class="p-[1px] relative bg-[#110D2E] rounded-full max-w-sm bg-gradient-to-r from-[#FC466B] to-[#3F5EFB]">
                  <input class="px-3 py-2 w-full text-[#3F5EFB]  rounded-full bg-inherit z-50 focus:outline-none" type="text" id="name" placeholder="Enter Your Name" />
                  <button type="submit" class="absolute right-0 top-0 mt-3 mr-4 z-50">
                    <CiSearch className='h-5 w-5 fill-current text-white' />
                  </button>
                </div>
              </div>

              <div className="hidden lg:ml-6 lg:block ">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <div  className="rounded-md  px-3 py-2 text-sm font-medium text-white">
                    Home
                  </div>
                  <div
                      
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Services
                  </div>
                  <div
                      
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </div>
                  <div
                      
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </div>
                  <div
                      
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </div>
                  <div
                      
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </div>
                </div>
              </div>




              <div className="flex ">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>


              <div className="hidden lg:ml-4 lg:block">
                <button class="px-6 py-2 bg-[#6318F1] text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden mt-3 py-4 bg-gradient-to-r from-[#FC466B]/15 to-[#3F5EFB]/15 mx-4">

            <div className="flex justify-center px-2 py-2 lg:ml-10 ">
              <div class="p-[1px] relative bg-[#110D2E] w-1/2 rounded-full max-w-md bg-gradient-to-r from-[#FC466B] to-[#3F5EFB]">
                <input class="px-3 py-2 w-full text-[#3F5EFB]  rounded-full bg-transparent/50 z-50 focus:outline-none" type="text" id="name" placeholder="Enter Your Name" />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4 z-50">
                  <CiSearch className='h-5 w-5 fill-current text-white' />
                </button>
              </div>
            </div>

            <div className="space-y-3 flex flex-col  mx-[25%]  pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                  
                className="block rounded-md px-3 py-3 bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 text-base font-medium text-white  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-2'>
                  <span >  <IoHomeOutline className='' size={23} /></span>
                  <span>Dashboard</span>
                </div>


              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                  
                className="block rounded-md px-3 py-2 bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10  text-base font-medium text-gray-100 hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-2'>
                  <span >  <IoHomeOutline className='' size={23} /></span>
                  <span>Services</span>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                  
                className="block rounded-md px-3 py-2 bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10  text-base font-medium text-gray-100 hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-2'>
                  <span >  <IoHomeOutline className='' size={23} /></span>
                  <span>Dashboard</span>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                  
                className="block rounded-md px-3 py-2 bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10  text-base font-medium text-gray-100 hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-2'>
                  <span >  <IoHomeOutline className='' size={23} /></span>
                  <span>Dashboard</span>
                </div>
              </Disclosure.Button>
            </div>
            {/* <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  as="a"
                    
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                    
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                    
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div> */}

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
