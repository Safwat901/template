

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../assests/css/style.css';

import { GridSlidesData } from "./GridSlidesData";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { width } from "@mui/system";


const GridSlides = () => {
    return (
        <div className='lg:container container mx-auto  gap-5 lg:flex lg:flex-row flex flex-col lg:px-20 px-5 lg:mt-32 mt-10  lg:items-center items-center lg:justify-content justify-content'>

            <div className="   lg:w-2/6 w-10/12 text-start  lg:mr-auto mr-auto ml-8 lg:ml-10 ">
                <div className="title  pb-5" >
                    <h1 className="font-bold text-lg">Latest Products</h1>
                </div>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        clickable: true
                        

                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >



                    {GridSlidesData.map((data1) => {


                        return (


                            <SwiperSlide>
                                < div className='flex flex-col gap-7' >


                                    {data1.map((submap) =>
                                        <div className='flex gap-2 '>
                                            <div className='w-[100px]'>
                                                <img src={submap.img} />
                                            </div>
                                            <div className='mt-1'>
                                                <h5 className='font-thin text-start'>{submap.product}</h5>
                                                <p className=' font-bold'>{submap.price}</p>
                                            </div>

                                        </div>)}



                                </div>
                            </SwiperSlide>
                        )

                    })}
                </Swiper>

            </div>



            {/* ...................................................2nd swiper........................................................ */}

            <div className="   lg:w-2/6 w-10/12 text-start  lg:mr-auto mr-auto ml-8 lg:ml-10">
                <div className="title  pb-5 " >
                    <h1 className="font-bold text-lg">Top Rated Products</h1>
                </div>



                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {GridSlidesData.map((slide2) => {

                        return (
                            <SwiperSlide>

                                {/* GRID SLIDES DIV */}
                                <div className='flex flex-col gap-7'>

                                    {slide2.map((sl2) =>

                                        <div className='flex gap-2 '>
                                            <div className='w-[100px]'>
                                                <img src={sl2.img} />
                                            </div>
                                            <div className='mt-1'>
                                                <h5 className='font-thin text-start'>{sl2.product}</h5>
                                                <p className=' font-bold'>{sl2.price}</p>
                                            </div>

                                        </div>

                                    )}










                                </div>
                                {/* GRID SLIDES DIV */}

                            </SwiperSlide>

                        )
                    }

                    )}

                </Swiper>

            </div>
            {/* ......................................................3rd swiper.......................................................... */}

            <div className="  lg:w-2/6 w-10/12 text-start  lg:mr-auto mr-auto ml-8 lg:ml-10">
                <div className="title  pb-5" >
                    <h1 className="font-bold text-lg">Top Rated Products</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {GridSlidesData.map((slide3) => {
                        return (

                            <SwiperSlide>

                                {/* GRID SLIDES DIV */}
                                <div className='flex flex-col gap-7'>

                                    {slide3.map((sl3) =>

                                        <div className='flex gap-2 '>
                                            <div className='w-[100px]'>
                                                <img src='images/veg1.jpg' />
                                            </div>
                                            <div className='mt-1'>
                                                <h5 className='font-thin text-start'>Crab Pool Security</h5>
                                                <p className=' font-bold'>$30</p>
                                            </div>

                                        </div>
                                    )}


                                </div>
                                {/* GRID SLIDES DIV */}

                            </SwiperSlide>
                        )
                    })}

                </Swiper>

            </div>




        </div >


    )
}

export default GridSlides