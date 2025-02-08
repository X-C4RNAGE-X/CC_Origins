"use client";
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className=" py-10" id="testimonials">
      <h1 className=" heading">
        Upcoming
        <span className="text-yellow-300"> Projects</span>
      </h1>
      <div className=" flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards 
         items={testimonials}
         direction="right"
         speed="slow"
         />
         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map(({id , img , name}) =>(
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">

                 <img src={img} alt={name} className="md:w-30 w-80 h-13"/>

                 
                </div>
            ))}
         </div>
        </div>
     </div>
  )
}

export default Clients
