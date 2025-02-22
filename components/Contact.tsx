"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "info@ccorigins.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen px-4 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/CCO Logo.png')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-60 backdrop-blur-md"></div>

      <div className="relative bg-[#1E1E1E] shadow-2xl rounded-xl p-6 w-full max-w-screen-md lg:max-w-5xl flex flex-col lg:flex-row lg:gap-10 pb-6">
        
        {/* Contact Form (Left Side) */}
        <div className="w-full lg:w-1/2">
          {!isSubmitted ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6">Let's Get in Touch</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                  <label className="block text-lg font-medium text-yellow-300">Name</label>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
                    className="w-full mt-2 p-3 bg-gray-900 text-white rounded-lg border border-white-100 focus:ring-2 focus:ring-yellow-400 focus:outline-none" required />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
                  <label className="block text-lg font-medium text-yellow-300">Email</label>
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
                    className="w-full mt-2 p-3 bg-gray-900 text-white rounded-lg border border-white-100 focus:ring-2 focus:ring-yellow-400 focus:outline-none" required />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
                  <label className="block text-lg font-medium text-yellow-300">Message</label>
                  <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}
                    className="w-full mt-2 p-3 bg-gray-900 text-white rounded-lg border border-white-100 focus:ring-2 focus:ring-yellow-400 focus:outline-none" rows={4} required />
                </motion.div>

                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-800 text-black py-3 font-bold rounded-lg shadow-lg transition duration-300 mt-4">
                  Submit
                </button>
              </form>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center">
                Thank you for reaching out!
              </h2>
              <p className="text-lg text-white text-center mt-4">
                Team CCOrigins will get back to you as soon as possible.
              </p>
            </div>
          )}
        </div>
         {/* Google Map & Contact Details (Right Side) */}
         <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 max-w-[95vw] mt-6 lg:mt-0">
          {/* Google Map */}
          <div className="w-full h-auto aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-white-100">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.949415036228!2d88.35177402599993!3d22.61836408129007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7b6834bbdf%3A0xb259d59b0cf2f5be!2sGovernment%20Quarters%2C%20Vivekananda%20Colony%2C%20Belur%2C%20Howrah%2C%20West%20Bengal%20711202!5e0!3m2!1sen!2sin!4v1739387983672!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="w-full bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg text-white text-center space-y-3 sm:space-y-4 border border-white-100">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">
              Contact Information
            </h3>
            <p className="text-sm sm:text-md md:text-lg flex items-center justify-center gap-2">
              <span>📍: 105/17/1 4th Floor Block B Unit-401 G.G.Road,Liluah Howrah-711204</span>
            </p>
            <p className="text-sm sm:text-md md:text-lg flex items-center justify-center gap-2">
              <span>📞: 9331999111</span>
            </p>
            <p className="text-sm sm:text-md md:text-lg flex items-center justify-center gap-2">
              <span>📩: info@ccorigins.com</span>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
