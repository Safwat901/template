import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import StarHalfIcon from '@mui/icons-material/StarHalf';


const ProductToCard = () => {

    const[number,setNumber]=useState(0);

    const increament=()=>{
        setNumber((val)=>val+1)
    }
    const decreament=()=>{
        setNumber((val)=>val-1)
    }
    return (
        <div className=' container mx-auto px-4 flex'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-slate-300 '>
                    <img src='images/veg1.jpg'></img>
                </div>
                <div className=''>
                    <div>
                        <h1>Vegetable's Package</h1>
                    </div>
                    <div>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                    </div>
                    <div>
                        <h1>$50.00</h1>
                    </div>
                    <div>
                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                    </div>
                    <div class="inline-flex gap-7 ">
                        <button onClick={decreament} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                            Prev
                        </button>
                        <h1>{number}</h1>
                        <button onClick={increament} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            Next
                        </button>
                    </div>
                </div >


                <div className='bg-slate-300'>
                    sdasd
                </div>
                <div className='bg-slate-300'>
                    asdasdasdasf
                </div >

            </div>

        </div>
    )
}

export default ProductToCard