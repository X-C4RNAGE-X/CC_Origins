"use client";

import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";


const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/* Spotlights for Background Effects */}
      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[30vw]" fill="#FFD700" /> {/* Yellow spotlight */}
        <Spotlight className="top-28 left-80 h-[80vh] w-[30vw]" fill="#FFEA00" /> {/* Brighter yellow spotlight */}
      </div>

      {/* Hero Background */}
      <div className="h-screen w-full bg-black bg-grid-white/[0.02] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-4">
      {/* Logo Render */}
      <img 
      src="CCO Logo.png" 
      alt="CC Origins Logo" 
      className="w-[400px] h-auto md:w-[200px] lg:w-[400px]"
 
      />
      </div>
      </div>



      {/* Animated Text Effect */}
      <TextGenerateEffect
  className="text-center text-[32px] md:text-4xl lg:text-5xl font-light leading-tight tracking-wide"
  words="Leadership in Advertising,Digital Marketing,Event & Exhibit,Interior & Exterior with two decades of Creative Caliber."
/>


      
    </div>
  );
};

export default Hero;
