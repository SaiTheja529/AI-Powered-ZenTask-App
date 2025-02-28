"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6"
    >
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200 backdrop-blur-md">
        {/* Header Section */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-extrabold text-center text-gray-800 tracking-wide"
        >
          About <span className="text-blue-600">ZenTask</span> 🧘‍♂️📌
        </motion.h1>

        <p className="text-lg text-center text-gray-600 mt-3">
          A mindful way to manage your tasks with clarity and focus.
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-700 text-lg mt-6 text-center leading-relaxed">
          ZenTask is a productivity tool that blends organization with mindfulness. 
          Designed to help you focus on what truly matters, ZenTask provides a seamless 
          experience for managing tasks effortlessly, eliminating clutter and distractions.
        </p>

        {/* Developer Info */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Developer Info</h3>

          <div className="mt-4 space-y-2">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-blue-600">Name:</span> P. Sai Theja
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-green-600">Phone:</span> 6305047408
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-red-600">Email:</span> 
              <a href="mailto:saitheja.22bcb7223@bitapstudent.ac.in" className="ml-1 text-blue-500 hover:underline">
                saitheja.22bcb7223@bitapstudent.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
