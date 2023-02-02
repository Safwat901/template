import React from 'react';
import { BlogData } from './BlogData'

const Blog = () => {
    return (
        <div className='container mx-auto items-center justify-content px-14 mt-20 '>

            <div className=''>
                <h1 className='text-2xl font-bold'>From The Blog</h1>
            </div>
            <div className='border-t-4 w-16 items-center justify-center mx-auto border-green-600 m-5'>

            </div>

            <div className='lg:flex lg:flex-row flex flex-col '>


                {BlogData.map((data) =>


                    <div class="max-w-lg mx-auto mt-6 ">
                        <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5 w-[350px]">
                            <a href="#">
                                <img class="" src={data.img} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a class="text-white bg-green-600   font-medium  text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>


                )}



            </div>
        </div>
    )
}

export default Blog