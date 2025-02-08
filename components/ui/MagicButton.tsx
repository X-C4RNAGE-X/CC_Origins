"use client";
import React from 'react';

const MagicButton = (
  { title, icon, position, handleclick, otherclasses }: 
  {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleclick?: () => void;
    otherclasses?: string;
  }) => {
  return (
    <button
      onClick={handleclick}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 group">
      {/* Updated Animated Gradient */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FDE047_0%,#FACC15_50%,#FDE047_100%)] transition-transform group-hover:scale-105" />
      
      {/* Button Content with Effects */}
      <span className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherclasses} 
        transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-yellow-500/50`}>
        {position === 'left' && <span className="group-hover:animate-bounce">{icon}</span>}
        {title}
        {position === 'right' && <span className="group-hover:animate-bounce">{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;
