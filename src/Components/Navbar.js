import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (

        <nav class="">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <div class="relative flex h-16 items-center justify-between ">

                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">

                        {/*................................ COMPANY TITLE ...........................................*/}
                        <div className='ml-14'>
                            <a href="#" class="  px-3 py-2 rounded-md font-semibold font-sans text-3xl lg:visible invisible  " aria-current="page">CureTech</a>
                        </div>
                        {/*................................ COMPANY TITLE end ...........................................*/}
                        <div class="flex  justify-center items-center m-auto  lg:block hidden ">
                            <div class=" space-x-4   ">
                                <a href="#" class="text-green-600  hover:text-slate-700  px-3 py-2 rounded-md text-sm font-medium">HOME</a>

                                <a href="#" class="text-green-600  hover:text-slate-700  px-3 py-2 rounded-md text-sm font-medium">SHOP</a>

                                <a href="#" class="text-green-600  hover:text-slate-700  px-3 py-2 rounded-md text-sm font-medium">PAGES</a>

                                <a href="#" class="text-green-600  hover:text-slate-700  px-3 py-2 rounded-md text-sm font-medium">BLOG</a>

                                <a href="#" class="text-green-600  hover:text-slate-700  px-3 py-2 rounded-md text-sm font-medium">CONTACT</a>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3 justify-center">
                        <FavoriteIcon style={{ color: 'gray' }} />
                        <ShoppingCartIcon style={{ color: 'gray' }} />
                        <div className='mr-3  w-28'>
                            <p>items:$1500</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pt-2 pb-3">

                    <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                </div>
            </div> */}
        </nav>

    )
}

export default Navbar