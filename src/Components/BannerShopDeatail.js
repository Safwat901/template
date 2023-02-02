import React from 'react'

const BannerShopDeatail = () => {
    return (
        <div className=' relative  '>
            <div className=''>
                <img className='w-full h-[130px] ' src="images/bannershop3.jpg" alt="..." />

            </div>
            <div className='absolute w-full top-7 '>

                <div className='flex justify-center'>
                    <div className='text-slate-200'>
                        <h1 className='text-5xl font-extrabold'>Vegetable's Package</h1>

                        <div className='flex justify-center gap-3  '>
                            <a className='flex justify-center gap-3 font-extrabold' href=''>Home- </a>
                            <a className='flex justify-center gap-3 font-extrabold' href=''>Vegetable-</a>
                            <p>Vegetable's Package</p>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default BannerShopDeatail