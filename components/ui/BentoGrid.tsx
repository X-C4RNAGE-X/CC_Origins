'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img , 
  imgClassName , 
  titleClassName , 
  spareImg ,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id? : number,
  img? : string ;
  imgClassName? : string ;
  titleClassName? : string ;
  spareImg? : string ;
}) => {
    const [copied, setcopied] = useState(false);
    const handleCopy = () => {

        navigator.clipboard.writeText('info@ccorigins.com');
        setcopied(true);
    }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] flex-wrap",
        className
      )}
      style = {{
        background: 'rgb(10, 25, 47)',
        backgroundColor: 'linear-gradient(0deg, rgba(255, 223, 0, 1) 0%, rgba(9, 33, 77, 1) 100%)',
        

        
      }}
    >
        <div className = {`${id === 6 && 'flex justify-center'} h-full`}>
            <div className="w-full h-full absolute">
                {
                    img && 
                    (
                     <img
                        src = {img}
                        alt = {img}
                        className = {cn(imgClassName , 'object-cover , object-center')}

                     />
                    )
                }

            </div>
            <div className = {`relative right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                {spareImg && (
                    <img
                    src = {spareImg}
                        alt = {spareImg}
                        className = {'object-cover , object-center w-full h-full'}
                        />
                )}
            </div>
            
            {
                id === 6 && 
                ( 
                    <BackgroundGradientAnimation>
                        {/*<div className=" absolute z-50 flex item-center justify-center text-white font-bold" /> */}
                    </BackgroundGradientAnimation>
                )
            }
            <div className={cn(
                titleClassName , 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div className="font-sans font-extralight text-[#E5D9F2] text-sm md:text-xs lg:text-base">
                    {description}
                </div>
                <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
                {title}
                </div>

            
            {id === 3 && (
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                    <div className="flex flex-col gap-3 lg:gap-8">
                        {['Photoshop' , 'Illustrator' , 'SketchUp'].map
                        ((item) =>(
                            <span key={item} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-250 rounded-lg text-center bg-[#2A004E]">
                                {item}
                            </span>
                        ))}
                        <span   className="py-4 px-3 rounded-lg text-center bg-[#2A004E]"/>
                        </div>
                        <div className="flex flex-col gap-3 lg:gap-8">
                            <span className="py-4 px-3 rounded-lg text-center bg-[#2A004E]"/>

                        {['3ds Max' , 'D5 Render' , 'Figma'].map
                        ((item) =>(
                            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-150 rounded-lg text-center bg-[#2A004E]">
                                {item}
                            </span>
                        ))}
                        
                        </div>

                </div>
            )}
            {id === 2 && (
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                    
                        
                </div>
            )}
            {id === 6 && (
                <div className="mt-5 relative">
                    <div className={`absolute -bottom-5 right-0`}>
                        <Lottie options={{
                            loop : copied,
                            autoplay : copied,
                            animationData,
                            rendererSettings : {
                                preserveAspectRatio : 'xMidYMid slice',
                            }
                        }}/>
                        </div>
                        <MagicButton 
                        title = {copied ? 'Email Locked and Loaded!' : 'Grab our Email'}
                        icon = {<IoCopyOutline />}
                        position="left"
                        
                        handleclick={handleCopy}
                        />
                    </div>
            )}
            

        </div>
      
      
    </div>
    </div>
  );
};
