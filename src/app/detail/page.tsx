import React from 'react'
import Image from 'next/image'
import detail1 from "../../../public/col-md-6 (3).png"
import colors from "../../../public/product-colors.png"
import stars from "../../../public/Frame 31.png"
import { IoHeartDislikeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import desktop from "../../../public/desktop-product-description-1.png"
import Footer from '@/components/footer'
import brand1 from "../../../public/fa-brands-1.png"
import brand2 from "../../../public/fa-brands-2.png"
import brand3 from "../../../public/fa-brands-3.png"
import brand4 from "../../../public/fa-brands-4.png"
import brand5 from "../../../public/fa-brands-5.png"

import brand6 from "../../../public/Vector.png"

const Detail = () => {
  return (
    <div>
      
            <div className="flex flex-wrap mt-[2%] pl-24 mb-[18%] bg-gray-100 py-16 ml-0  ">
                <div className="w-[100%] sm:w-[55%]"> 
                    <Image
                    src={detail1}
                    alt="Pic-One"
                    className="w-[100%] sm:w-[58%]  gap-4 -ml-12 sm:ml-0" />
                </div>
                <div className="w-[100%] sm:w-[40%] -ml-[14%] sm:-ml-[8%] ">
                    <h1 className="text-3xl mb-2 mt-10 sm:mt-0">Floating Phone</h1>

                   

                    <div className="flex gap-3 py-1">
                        <Image
                            src={stars}
                            alt="Pic-One"
                            className="w-[124px] h-[20px]" />
                        <p className="text-sm text-gray-400">| 5 Customer Review</p>
                    </div>
                    <p className="text-xl text-gray-400">$1,139.33</p>
                    <p className="text-sm my-1">
                        Met minim Mollie non desert Alamo est sit cliquey dolor 
                do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                Excitation venial consequent sent nostrum met.

                    </p>
                    <Image
                        src={colors}
                        alt="Pic-One"
                        className="w-[150px] h-[30px] my-10 " />
                
                    <div className="flex gap-2 my-10 ">
                        <button className=" pl-2  w-[120px] h-[50px] border-2 border-gray-300 rounded-xl">Select Option</button>
                        <button className="pl-3  text-center  w-[50px] h-[50px] border-2 border-black rounded-full"><IoHeartDislikeOutline /></button>
                        <button className="pl-3  text-center  w-[50px] h-[50px] border-2 border-black rounded-full"><CiShoppingCart /></button>
                        <button className="pl-3  text-center  w-[50px] h-[50px] border-2 border-black rounded-full"><FaEye /></button>
                    
                    </div>
    </div>
    </div>
    <Image className='hidden sm:block w-[100%] h-screen'
    src={desktop}
    alt='desktop'>

    </Image>

    <div className='flex flex-wrap justify-between w-[100%] bg-gray-50 py-12 px-32'>
        <Image className='sm:w-[8%] my-4 '
        src={brand1}
        alt='cover'></Image>

<Image className='sm:w-[8%] my-4  '
        src={brand2}
        alt='cover'></Image>

<Image className='sm:w-[8%]my-4  '
        src={brand3}
        alt='cover'></Image>

<Image className='sm:w-[8%] my-4 '
        src={brand4}
        alt='cover'></Image>

<Image className='sm:w-[8%] my-4  '
        src={brand5}
        alt='cover'></Image>
 <Image className='sm:w-[8%]  -mt-6 my-4 '
        src={brand6}
        alt='cover'></Image>       
    </div>


  <Footer />
    </div>
  )
}

export default Detail
