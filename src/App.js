import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import HeroCategories from './Components/HeroCategories';
import SlidingCart from './Components/SlidingCart';
import FeaturedProduct from './Components/FeaturedProduct';
import Banner from './Components/Banner';
import GridSlides from './Components/GridSlides';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import TopNav from './Components/TopNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopDetailsPage from './Components/ShopDetailsPage';

import Indexx from './Components/Indexx';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Indexx />}/>
      <Route path='/shopdetail' element={<ShopDetailsPage />}/>
    </Routes>
    
    
    </BrowserRouter>
    // <div className="App overflow-hidden">





    //   {/* <TopNav />
    //   <Navbar />
    //   <HeroCategories />
    //   <SlidingCart />
    //   <FeaturedProduct />
    //   <Banner />
    //   <GridSlides />
    //   <Blog />
    //   <Footer />  */}



    // </div>
  );
}

export default App;
