'use client';
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProject = () => {
  return (
    <div className=" py-40" id="projects">
      <h1 className="heading font-semibold">
        Our {' '}
        <span className="text-yellow-300"> Works</span>
      </h1>
      <div className=" flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({id , title , des , img , link}) => (
            <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                <PinContainer title={link}>
                  <a href={link}>
                    <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#31363F]">
                            
                        </div>
                        <img 
                        src={img}
                        alt={title}
                        className="z-10 relative bottom-0"
                        />
                    </div>
                    <h1 className="font bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {title}
                    </h1>
                    <p className=" lg:text-xl lg:font-xl font-light text-sm line-clamp-2">
                        {des}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center  ">
                        
                        </div>
                        <div className=" flex justify-center items-center">
                            <p className="flex lg:text-xl md:text-xs text-sm text-yellow-400">Check in pdf</p>
                            <FaLocationArrow className="ms-3" color="#CBACF9"/>
                        </div>

                    </div>
                   </a>
                </PinContainer>
                </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProject
