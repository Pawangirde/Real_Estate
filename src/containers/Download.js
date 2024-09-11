import React from 'react';

const Download = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800">Get Our App</h2>
          <p className="text-gray-600 mt-2">Download our app for the best experience.</p>
          
          {/* Input Field and Button */}
          <div className="mt-6 flex items-center">
            <input 
              type="text" 
              placeholder="Enter your mobile number" 
              className="p-3 w-full md:w-auto flex-grow border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-500 text-white px-4 py-3 rounded-r-lg hover:bg-indigo-600 transition">
              Send App Link
            </button>
          </div>
          
          {/* Available on Buttons */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-800 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="iOS" className="h-6 mr-2" />
              Available on iOS
            </a>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-green-600 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png" alt="Android" className="h-6 mr-2" />
              Available on Android
            </a>

          </div>
        </div>
        
        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="/image/2375357.jpg" alt="App Preview" className="w-full max-w-sm rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Download;
