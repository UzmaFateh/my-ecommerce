
import Image from 'next/image'
import card1 from "../../public/fixed-height.png"
import card2 from "../../public/product-cover-5.png"
import card3 from "../../public/product-cover-5 (1).png"
import card4 from "../../public/product-cover-5 (2).png"

import card5 from "../../public/product-cover-5 (3).png"
import card6 from "../../public/fixed-height (1).png"
import card7 from "../../public/fixed-height (2).png"
import card8 from "../../public/fixed-height (3).png"
import React from 'react'

const Card = () => {
    return (
        <div>
            <center>
                <p className='text-sm text-gray-400'>Featured Products</p>
                <h1 className='text-lg font-bold'>BESTSELLER PRODUCTS</h1>
                <p className='text-xs text-gray-400'>Problems trying to resolve the conflict between </p>

            </center>
            <div className='flex  flex-wrap justify-around ml-[8%] w-[86%]' >
                <div >
                    <div className=''>
                        <Image className='mt-16  h-[427px] w-[239px]'
                            src={card1}
                            alt='card'
                            width={100}
                            height={100}
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=''>
                        <Image className='mt-16 h-[427px] w-[239px]'
                            src={card2}
                            alt='card'
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className=''>
                        <Image className='mt-16 h-[427px] w-[239px]'
                            src={card3}
                            alt='card'
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className=''>
                        <Image className='mt-16 h-[427px] w-[239px]'
                            src={card4}
                            alt='card'
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex  flex-wrap justify-around ml-[8%] w-[86%]' >
                <div >
                    <div className=''>
                        <Image className='mt-16  h-[427px] w-[239px]'
                            src={card5}
                            alt='card'
                            width={100}
                            height={100}
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=''>
                        <Image className='mt-16 h-[427px] w-[239px]'
                            src={card6}
                            alt='card'
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className=''>
                        <Image className='mt-16 h-[427px] w-[239px]'
                            src={card7}
                            alt='card'
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className=''>
                        <Image className='mt-16 h-[427px] w-[239px]'
                            src={card8}
                            alt='card'
                        ></Image>
                        <div className='text-center mt-[8%] mb-[4%]'>
                            <h4 className='text-base font-semibold'>Graphic Design</h4>
                            <p className='text-sm text-gray-500 font-semibold'>English Department</p>
                            <p className='text-xs text-gray-400 font-semibold'>$16.48$6.48</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Card
