// app/dashboarddemo/page.tsx

"use client";

import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-600 text-white p-4">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <ul className="mt-4">
          <li><a href="#" className="block py-2">Home</a></li>
          <li><a href="#" className="block py-2">Settings</a></li>
          <li><a href="#" className="block py-2">Profile</a></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>
        <p className="mt-4 text-lg text-gray-600">This is a simple dashboard page with a sidebar.</p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <ul className="mt-4">
            <li className="border-b py-2">Activity 1</li>
            <li className="border-b py-2">Activity 2</li>
            <li className="border-b py-2">Activity 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;