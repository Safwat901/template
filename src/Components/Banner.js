import React from 'react'

const Banner = () => {
    return (
        <div className='container mx-auto  flex justify-center mt-5 '>
            <div className=' lg:flex lg:flex-row flex flex-col md:flex md:flex-row lg:gap-20 gap-5 w-4/5 pt-8 '>
                <div className='col-span-2  '>
                    <img className='lg:w-[520px] w-[400px] lg:h-[200px] h-[150px] md:' src='images/bn1.jpg' />

                </div>
                <div className='col-span-2 '>
                    <img className='lg:w-[520px] w-[400px] lg:h-[200px] h-[150px]' src='images/bn2.jpg' />

                </div>
            </div>


        </div>
    )
}

export default Banner