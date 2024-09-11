import React from 'react';
import { FaHome, FaArrowRight, FaUserTie, FaUserAlt, FaBuilding } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Adviser = () => {
  return (
    <div className="bg-orange-50 p-8">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto space-y-8 lg:space-y-0">
        
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="text-4xl text-indigo-600">
            <FaHome /> {/* React Icons Home Icon */}
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold lg:text-left text-black-500">Properties Posted By</h2>
            <h3 className="text-lg font-medium text-gray-600">Choose Type of Advertiser</h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800">Advertiser Type</h3>
          <p className="text-sm text-gray-600 mb-4">Select the type of advertiser</p>
          <ul className="space-y-6 ml-5">

          <Link to={'/property'} className="block no-underline hover:no-underline">
            <li className="mb-3 flex justify-between items-center text-lg text-indigo-700 hover:text-indigo-600 cursor-pointer">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <FaUserTie /> {/* Icon for Dealer */}
                  <span>Dealer</span>
                </div>
                <span className="text-sm text-gray-500">12 properties</span> {/* Number of properties */}
              </div>
              <span className="text-gray-500 mr-5"><FaArrowRight /></span> {/* React Icons Arrow Icon */}
            </li>
            </Link>
            
            <Link to={'/property'} className="block no-underline hover:no-underline">
            <li className="mb-3 flex justify-between items-center text-lg text-indigo-700 hover:text-indigo-600 cursor-pointer">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <FaUserAlt /> {/* Icon for Owner */}
                  <span>Owner</span>
                </div>
                <span className="text-sm text-gray-500">8 properties</span> {/* Number of properties */}
              </div>
              <span className="text-gray-500 mr-5"><FaArrowRight /></span> {/* React Icons Arrow Icon */}
            </li>
            </Link>

            <Link to={'/property'} className="block no-underline hover:no-underline">
            <li className=" flex justify-between items-center text-lg text-indigo-700 hover:text-indigo-600 cursor-pointer">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <FaBuilding /> {/* Icon for Builder */}
                  <span>Builder</span>
                </div>
                <span className="text-sm text-gray-500">15 properties</span> {/* Number of properties */}
              </div>
              <span className="text-gray-500 mr-5"><FaArrowRight /></span> {/* React Icons Arrow Icon */}
            </li>
            </Link>

          </ul>
        </div>

      </div>
    </div>
  );
}

export default Adviser;
