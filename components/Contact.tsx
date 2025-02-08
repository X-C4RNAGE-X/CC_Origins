"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate a delay to mimic form submission
    setTimeout(() => {
      alert("Form submitted successfully!");
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <AuroraBackground className="flex items-center justify-center min-h-screen w-full px-4">
      <div
        className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl rounded-xl p-12 w-full max-w-2xl">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2
              className="text-4xl font-bold text-center text-white mb-6"
              
            >
              Let's Get in Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <label className="block text-lg font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <label className="block text-lg font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <label className="block text-lg font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={4}
                  required
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg shadow-lg transition duration-300"
                
              >
                Submit
              </button>
            </form>
          </motion.div>
        ) : (
          <div
            className="flex flex-col items-center justify-center h-full"
            
          >
            <h2 className="text-3xl font-bold text-green-400 text-center">
              Thank you for reaching out!
            </h2>
            <p className="text-lg text-gray-300 text-center mt-4">
              Team CC-Origins will get back to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </AuroraBackground>
  );
};

export default Contact;
