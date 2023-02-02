import React, { useState } from 'react';
import { Cards } from './FeaturedProductData';

const FeaturedProduct = () => {
    const [items, setItems] = useState(Cards);

    const filterCat = (getTitle) => {
        const filtered = Cards.filter((filterdata) => {
            return filterdata.title === getTitle;
        })

        setItems(filtered);

    }
    const filterAll = (getTitle) => {
        const filtered = Cards.filter((filterdata) => {
            return filterdata.cm === getTitle;
        })

        setItems(filtered);

    }

    return (
        <div className='container lg:mx-auto mx-auto    space-x-4 pt-16  mt-10'>
            <div >
                <div className=''>
                    <h1 className='text-2xl font-bold'>Featured Product</h1>
                </div>
                <div className='border-t-4 w-16 items-center justify-center mx-auto border-green-600 m-5'>

                </div>
                <div className=' flex justify-center items-center m-auto space-x-2'>
                    <button className=' lg:py-2  lg:px-4 py-2 px-2 ' onClick={() => filterAll('all')}>All</button>
                    <button className=' lg:py-2  lg:px-4 py-2 px-2 ' onClick={() => filterCat('orange')}>Orange</button>
                    <button className=' lg:py-2  lg:px-4 py-2 px-2 ' onClick={() => filterCat('fresh meat')}>Fresh Meat</button>
                    <button className=' lg:py-2  lg:px-4 py-2 px-2 ' onClick={() => filterCat('vegetable')}>Vegetables</button>
                    <button className=' lg:py-2  lg:px-4 py-2 px-2 ' onClick={() => filterCat('fast food')}>Fast Food</button>
                </div>

                <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 '>


                    {items.map((elem) => {
                        const { id, title, price, img } = elem;

                        return (
                            /* CARDS............................ */
                            
                            <div class=" lg:overflow-hidden  overflow-hidden  ">
                                <div class=" shadow-lg  items-center justify-center max-w-sm scroll-smooth  ">
                                    <div className='text-center'>
                                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" className='text-center'>
                                        <img className="lg:w-[280px] w-[180px] lg:h-[200px] h-[120px] m-auto" src={img} alt="" />
                                    </a>
                                    </div>

                                    <div class="p-6">
                                        <h5 class="text-gray-900 lg:text-xl text-sm lg:font-medium font-small mb-2">{title}</h5>
                                        <h5 class="text-gray-900  font-sm mb-2">{price}</h5>

                                        <button type="button" class=" inline-block px-6 py-2.5  text-black font-medium text-xs leading-tight uppercase rounded  hover:bg-green-600 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out ">
                                            <span className='font-medium'>Add to cart</span>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                            

                            /* CARDS end............................ */

                        )
                    })}

                    

                    



                </div>




            </div>
        </div>
    )
}

export default FeaturedProduct














// const FeaturedProduct = () => {
//     const [items, setItems] = useState(Cards);

//     const filterCat = (getTitle) => {
//         const filtered = Cards.filter((filterdata) => {
//             return filterdata.title === getTitle;
//         })

//         setItems(filtered);

//     }
//     const filterAll = (getTitle) => {
//         const filtered = Cards.filter((filterdata) => {
//             return filterdata.cm === getTitle;
//         })

//         setItems(filtered);

//     }

//     return (
//         <div className='container mx-auto px-32   space-x-4'>
//             <div >
//                 <div>
//                     <h1>Featured Product</h1>
//                 </div>
//                 <div className=' flex justify-center items-center m-auto space-x-2'>
//                     <button className='bg-blue-500 py-2 px-4 ' onClick={() => filterAll('all')}>All</button>
//                     <button className='bg-blue-500 py-2 px-4 ' onClick={() => filterCat('orange')}>Orange</button>
//                     <button className='bg-blue-500 py-2 px-4 ' onClick={() => filterCat('fresh meat')}>Fresh Meat</button>
//                     <button className='bg-blue-500 py-2 px-4 ' onClick={() => filterCat('vegetable')}>Vegetables</button>
//                     <button className='bg-blue-500 py-2 px-4 ' onClick={() => filterCat('fast food')}>Fast Food</button>
//                 </div>

//                 <div className='columns-4'>


//                     {items.map((elem) => {
//                         const { id, title, price, img } = elem;

//                         return (
//                             /* CARDS............................ */
//                             <div class=" w-[300px]  ">
//                                 <div class=" shadow-lg bg-white max-w-sm scroll-smooth ">
//                                     <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
//                                         <img className="w-[280px] h-[200px]" src={img} alt="" />
//                                     </a>
//                                     <div class="p-6">
//                                         <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
//                                         <h5 class="text-gray-900  font-sm mb-2">{price}</h5>

//                                         <button type="button" class=" inline-block px-6 py-2.5  text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
//                                             <span className='font-medium'>Add to cart</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             /* CARDS end............................ */

//                         )
//                     })}

                    

                    



//                 </div>




//             </div>
//         </div>
//     )
// }

// export default FeaturedProduct