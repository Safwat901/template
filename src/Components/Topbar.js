import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { fontSize } from '@mui/system';

const Topbar = () => {

  const [showOption, setshowOption] = useState(false);
  const handleClick = () => {
    setshowOption(!showOption);
  }



  return (
    <div>

      <nav className="bg-blue-400   md:flex md:items-center md:justify-between sm:bg-green-500 md:bg-amber-500">

        {/* Mail dev ....................*/}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ml-20  ">
          <div className="relative flex h-10 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">

              <div className="hidden sm:ml-6 sm:block mr-18 ">
                <div className="flex space-x-4 ">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                  <div className="inline-flex space-x-0   " >
                    <div className="flex justify-start ">
                      <svg className="w-6 h-6 inline-block  my-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>

                    <ul className='inline-flex space-x-0 md:flex md:items-center z-[-1] md:z-auto md:static absolute' >
                      <li href="#" className="text-slate-900 md:my-0  px-3 py-2 rounded-md text-sm font-small ">bitbotlab@gmail.com</li>

                      <li href="#" className="text-slate-900 md:my-0  px-3 py-2 rounded-md text-sm font-small"> Free Shipping for all Order of $99</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
        <div className='flex  '>
          <div className='space-x-3.5 w-45 flex justify-center items-center mr-15 pr-10   '>

            <FacebookIcon style={{ color: "#4267B2", fontSize: '20px' }} />

            <TwitterIcon style={{ color: "#00acee", fontSize: '20px' }} />
            <LinkedInIcon style={{ color: "#0A66C2", fontSize: '20px' }} />
            <PinterestIcon style={{ color: "#E60023", fontSize: '20px' }} />

          </div>
          <div className='flex '>
            <ul className='flex mr-20 list-none space-x-10 '>

              {/* Dropdown box...................................  */}
              <div className="relative inline-block text-left">
                <div className='items-center '>
                  <button onClick={handleClick} type="button" className=" inline-flex w-full justify-center    px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">English

                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>


                {showOption && (
                  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1" role="none">

                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Spanish</a>

                    </div>
                    <div className="py-1" role="none">
                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">English</a>

                    </div>

                  </div>
                )}
              </div>


              {/* Dropdown box end...................................  */}

              <li className='flex '> <span className='items-center my-1  '><SupervisorAccountIcon /></span><a className=' pl-1 inline-flex w-full justify-center    px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"' href=''>Login</a></li>
            </ul>
          </div>


        </div>

      </nav>

    </div>
  )
}

export default Topbar