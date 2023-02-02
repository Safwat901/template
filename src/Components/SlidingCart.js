import React from 'react';
import { carts } from './SlidingCartData';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '@mui/material';
import { Navigation, Autoplay } from "swiper";
import '../assests/css/style.css';


const data = [
  {
    id: 1,
    img: '/images/sl1.jpg',
    btn: 'button 1'
  },
  {
    id: 2,
    img: '/images/sl2.jpg',
    btn: 'button 2'
  },
  {
    id: 3,
    img: '/images/sl2.png',
    btn: 'button 3'
  },
  {
    id: 4,
    img: '/images/sl3.jpg',
    btn: 'button 4'
  },
  {
    id: 5,
    img: '/images/sl4.jpg',
    btn: 'button 5'
  },
  {
    id: 6,
    img: '/images/sl1.jpg',
    btn: 'button 6'
  },
  {
    id: 7,
    img: '/images/sl1.jpg',
    btn: 'button 7'
  },
  {
    id: 8,
    img: '/images/sl1.jpg',
    btn: <Button>jhsd</Button>
  },
]


const SlidingCart = () => {






  return (
    <div className='container mx-auto px-4 mt-8'>
      <Swiper
        modules={[Navigation, Autoplay]}
        rewind={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,

          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,

          },
          1280: {
            width: 1280,
            slidesPerView: 4,

          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={2}

        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

      >
        {data.map(user => (
          <SwiperSlide key={user.id}>
            {/* CARDS............................ */}
            <div className='swiper-container  '>
              <div class="flex items-center justify-center     ">
                <div>
                  <div class="rounded-lg shadow-lg  max-w-sm scroll-smooth  ">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="lg:w-full w-full lg:h-[200px] h-[200px] md:w-full md:h-[200px] sm:w-full sm:h-[200px] " src={user.img} alt="" />
                    </a>
                    <div class="p-6">
                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                      {/* <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </p> */}
                      <button type="button" class=" inline-block px-6 py-2.5  text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        <span className='font-medium'>Add to cart</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
              {/* CARDS end............................ */}<div>

              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

    </div>
  )
}

export default SlidingCart








{/* <ArrowBackIosNewIcon  className='cursor-pointer' />

2nd div= lg:w-[250px]  md:w-[300px] sm:w-[300px]
img div=lg:w-[200px] w-[200px] lg:h-[200px] h-[200px] md:w-[200px] md:h-[200px] sm:w-[200px] sm:h-[200px] 


width-100% h-fixed
        <div id='slider' className='w-full h-full overflow-x-scroll overflow whitespace-nowrap scroll-smooth'>

          {carts.map((item) => (
            <img src={item.img} alt='/' className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' />

          ))}

        </div>
        <ArrowForwardIosIcon/> */}