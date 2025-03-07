"use client";

import React from "react";

const ContactZenTask = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-10 text-gray-900">
        
        {/* Highlighted Main Motive */}
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-wide">
            Stay productive with ZenTask
          </h2>
          <p className="mt-2 text-lg font-semibold text-white">
            Let AI handle the small things so you can focus on what matters!
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
          <h2 className="text-2xl font-semibold text-center">Contact Me</h2>
          <div className="mt-4 space-y-3 text-lg text-center">
            <p>
              <span className="font-bold text-yellow-300">Name:</span> P. Sai Theja
            </p>
            <p>
              <span className="font-bold text-green-300">Phone:</span> 6305047408
            </p>
            <p>
              <span className="font-bold text-blue-300">Email:</span> saitheja.22bcb7223@bitapstudent.ac.in
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactZenTask;
