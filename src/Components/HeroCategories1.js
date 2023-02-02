import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Margin } from '@mui/icons-material';
import { width } from '@mui/system';

const HeroCategories1 = () => {

    const [showCategory, setshowCategory] = useState(false);
    const [currentIndex, setcurrentIndex] = useState(0);


    const handleClick = () => {
        setshowCategory(!showCategory);
    }
    const handleLeft = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    }
    const handleRight = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndexLast = isLastSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndexLast);
    }



    const slides = [
        {
            url: 'images/caro2.jpg'
        },
        {
            url: 'images/caro3.jpg'
        },
        {
            url: 'https://www.24mantra.com/wp-content/uploads/2020/01/flat-lay-bag-groceries_23-2148262101.jpg'
        },
    ]



    return (
        <div className='container mx-auto px-4  flex flex-col space-x-4 lg:flex-row '>

            {/* categories flex */}
            <div className='  flex-none  h-20  w-full lg:w-72 '>

                <div onClick={handleClick} type="button" class="inline-flex cursor-pointer lg:ml-14 flex mr-56 w-full  lg:w-48 justify-center items-center  bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm   focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <div className='mr-2  '>
                        <MenuIcon />
                    </div>
                    <div>

                        <p>All Departments</p>
                    </div>

                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>

                </div>

                {/* dropdown menu */}

                {showCategory && (

                    <div class=" absolute bg-white  z-10 mt-2 w-11/12 sm:w-11/12 sm:block  lg:w-48 lg:ml-14 origin-top-right rounded-md   shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">

                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>

                        </div>
                    </div>

                )}

            </div>

            {/* categories flex end*/}


            {/* Search bar */}
            <div className=' flex flex-col space-y-4 w-4/5 justify-start  mr-5'>

                <div className='w-full flex  '>

                    <div className='lg:w-full '>
                        <div class="input-group  inline-block relative lg:flex md:flex flex lg:w-full  w-full mb-4 items-center border-zinc-300 border">
                            <div className=' w-64  border-solid border-0 border-x border-gray-300  '>
                                <div type="button" className=" inline-flex  justify-center    px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <p>All Categories</p>
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className=' w-full lg:w-full '>
                                <input type="search" class=" form-control relative flex-auto  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding   transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                            </div>
                            <div className=' bg-green-600 lg:h-[58px] lg:items-center lg:justify-center h-full xl:h-full '>
                                <button class="btn  px-6 py-3  hover:bg-green-600 text-white font-medium text-xs lg:h-full h-[60px]   " type="button" id="button-addon3">Search</button>
                            </div>
                        </div>


                    </div>
                    {/* Search bar end */}

                    {/* ........................hotline........................ */}
                    <div className=' w-60 ml-40 flex  space-x-8   lg:visible invisible '>

                        <div className='ml-5 pt-2'>
                            <PhoneIcon style={{ color: '#16a34a' }} />
                        </div>
                        <div className='ml-12'>
                            <p className='font-bold'>+93182390823</p>
                            <p className='font-thin '>Support 24/7 time</p>
                        </div>
                    </div>
                    {/* ........................hotline end........................ */}

                </div>



                

            </div>
        </div>


    )
}

export default HeroCategories1





