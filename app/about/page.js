"use client";

import React from "react";

const AboutZenTask = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-gray-800">
        <h1 className="text-4xl font-extrabold text-center text-blue-600">ZenTask – AI-Powered To-Do List</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          ZenTask is a smart task management app that helps you stay organized effortlessly. With AI integration, you can add tasks just by describing them, reducing manual effort. Set deadlines with a specific date and time, ensuring better time management.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-500 pb-2">Features</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-semibold mr-2">AI</span>
              <span className="text-gray-800 font-medium">AI-Powered Task Addition – Just describe your task, and AI will add it for you.</span>
            </li>
            <li className="flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold mr-2">Deadlines</span>
              <span className="text-gray-800 font-medium">Set deadlines with a date and time for efficient planning.</span>
            </li>
            <li className="flex items-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold mr-2">Alerts</span>
              <span className="text-gray-800 font-medium">Receive alerts for overdue tasks, which are highlighted in red.</span>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm font-semibold mr-2">Actions</span>
              <span className="text-gray-800 font-medium">Mark tasks as complete, undo them, or delete unnecessary tasks.</span>
            </li>
            <li className="flex items-center">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm font-semibold mr-2">UI</span>
              <span className="text-gray-800 font-medium">Modern, responsive UI built with Bootstrap and Tailwind CSS.</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 font-medium">Stay productive with ZenTask – Let AI handle the small things so you can focus on what matters!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutZenTask;
