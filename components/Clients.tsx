"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

// Define a size mapping based on `id`
const logoSizes: { [key: number]: { width: string; height: string } } = {
  1: { width: "220px", height: "80px" }, // Kinetic
  2: { width: "180px", height: "90px" }, // Crimson Paint
  3: { width: "210px", height: "90px" }, // Vyana Sports
  4: { width: "200px", height: "60px" }, // Vyana Wealth
  5: { width: "150px", height: "120px" }, // BiswaKarma
  6: { width: "150px", height: "110px" }, // Pragati
  7: { width: "200px", height: "70px" }, // Duroplast
  8: { width: "250px", height: "80px" }, // Balaji
  9: { width: "250px", height: "80px" }, // T&I
  10: { width: "230px", height: "80px" }, // Wadbros
};

const Clients = () => {
  return (
    <div className="py-10" id="testimonials">
      <h1 className="heading">
        Client's <span className="text-yellow-300">FeedBack</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

        {/* Company Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap items-center justify-center gap-9 max-lg:mt-10">
          {companies.map(({ id, img, name }) => {
            const { width, height } = logoSizes[id] || { width: "100px", height: "50px" }; // Default size

            return (
              <div key={id} className="flex items-center justify-center">
                <img src={img} alt={name} style={{ width, height }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Clients;
