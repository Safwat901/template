import React from 'react'
import Banner from './Banner'
import Blog from './Blog'
import FeaturedProduct from './FeaturedProduct'
import Footer from './Footer'
import GridSlides from './GridSlides'
import HeroCategories from './HeroCategories'
import Navbar from './Navbar'
import SlidingCart from './SlidingCart'
import TopNav from './TopNav'

const Indexx = () => {
  return (
     <div className="App overflow-hidden">





       <TopNav />
       <Navbar />
       <HeroCategories />
       <SlidingCart />
       <FeaturedProduct />
       <Banner />
       <GridSlides />
       <Blog />
       <Footer />  



     </div>
  )
}

export default Indexx