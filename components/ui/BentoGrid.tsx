'use client';
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

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
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto auto-rows-min",
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
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string | string[];
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = id === 6 && Array.isArray(img) ? img : [];

  useEffect(() => {
    if (id === 6 && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [id, images]);

  const toggleImagePopup = () => {
    setIsImageOpen(!isImageOpen);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none flex flex-col border border-white/[0.1] p-4",
        "h-full min-h-[250px]", // Ensure the item is fully filled
        className
      )}
    >
      <div className="relative w-full h-full flex justify-center">
        {id === 6 && images.length > 0 ? (
          <img
            src={images[currentImageIndex]}
            alt={`Sliding Image ${currentImageIndex + 1}`}
            className={cn(
              imgClassName,
              "object-cover object-center w-full h-full rounded-3xl transition-opacity duration-1000 ease-in-out"
            )}
          />
        ) : (
          img &&
          typeof img === "string" && (
            <img
              src={img}
              alt="Static Image"
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full rounded-3xl cursor-pointer"
              )}
              onClick={toggleImagePopup}
            />
          )
        )}
      </div>

      {isImageOpen && img && typeof img === "string" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={img}
              alt="Popup Image"
              className="max-w-[90vw] max-h-[90vh] object-cover object-center rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-black hover:bg-gray-200"
              onClick={toggleImagePopup}
            >
              <IoCloseOutline size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
