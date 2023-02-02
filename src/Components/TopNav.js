import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const TopNav = () => {

    const [menu, setmenu] = useState(false);
    const [dropmenu, setdropmenu] = useState(true);
    const [shownav, setshownav] = useState(false);



    const clicker = () => {
        setmenu(!menu);
        setdropmenu(!dropmenu)
        setshownav(!shownav)
    }



    return (
        <div className=''>
            <nav className='lg:bg-slate-200  md:flex md:items-center md:justify-between sm:bg-white md:bg-white  '>
                <div className='flex justify-between items-center '>
                    <span className='md:block lg:hidden px-6 md:px-6 sm:mx-6 justify-center items-center mt-5 '>
                        CureTech
                    </span>
                    <span onClick={clicker} className='text-2xl md:hidden block mx-2 mt-5 cursor-pointer' >

                        {menu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}

                    </span>
                </div>
                <span className='lg:visible invisible md:hidden lg:block'>
                    hello@bitbotlab

                </span>
                <span className='lg:visible invisible'>
                    Free Shipping for all Order of $99

                </span>



                {shownav && (
                    <div className='flex sm:flex w-auto relative'>
                        <ul className='md:flex lg:bg-slate-200 bg-white md:items-center z-10 md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 mt-10  transition-all ease-in duration-500'>

                            <li className='visible lg:invisible '>
                                hello@bitbotlab

                            </li>
                            <li className='visible lg:invisible '>
                                Free Shipping for all Order of $99

                            </li>
                            <div className='flex flex-row justify-center'>

                                <li className='mx-4 my-6 md:my-0'>
                                    <FacebookIcon style={{ color: "#4267B2", fontSize: '20px' }} />
                                </li>
                                <li className='mx-4 my-6 md:my-0'>
                                    <TwitterIcon style={{  color: "#00acee", fontSize: '20px' }} />

                                </li>
                                <li className='mx-4 my-6 md:my-0'>
                                    <LinkedInIcon style={{ color: "#0A66C2", fontSize: '20px' }} />

                                </li>
                                <li className='mx-4 my-6 md:my-0'>
                                    <PinterestIcon style={{ color: "#E60023", fontSize: '20px' }} />

                                </li>

                            </div>
                            
                                <li className='mx-4 my-6 md:my-0'>
                                    <button type="button" className=" inline-flex w-full justify-center    px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">English

                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                </li>
                                <div className='flex justify-center'>
                                <li  className='flex mx-4'>  <span className='items-center my-1 justify-center inline-flex '><SupervisorAccountIcon /></span><a className=' pl-1 inline-flex w-full justify-center    px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"' href=''>Login</a>
                                </li>
                                </div>

                        </ul>
                    </div>
                )}




                <div>
                    {dropmenu && (
                        <ul className='flex flex-row md:flex md:items-center z-[-1] md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0  transition-all ease-in duration-500'>



                            <li className='mx-4 my-6 md:my-0'>
                                <FacebookIcon style={{ color: "#4267B2", fontSize: '20px' }} />
                            </li>



                            <li className='mx-4 my-6 md:my-0' >
                                <TwitterIcon style={{ color: "#00acee", fontSize: '20px' }} />

                            </li>

                            <li className='mx-4 my-6 md:my-0'>
                                <LinkedInIcon style={{ color: "#0A66C2", fontSize: '20px' }} />

                            </li>
                            <li className='mx-4 my-6 md:my-0'>
                                <PinterestIcon style={{ color: "#E60023", fontSize: '20px' }} />

                            </li>
                            <li className='mx-4 my-6 md:my-0'>
                                <button type="button" className=" inline-flex w-full justify-center    px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">English

                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>

                            </li>
                            <li className='flex mx-4 '>  <span className='items-center my-1  '><SupervisorAccountIcon /></span><a className=' pl-1 inline-flex w-full justify-center    px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"' href=''>Login</a>
                            </li>



                        </ul>
                    )}
                </div>







            </nav>
        </div>
    )
}

export default TopNav