import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import RecommendedProperties from './RecommendedProperties';

const PropertyDashboard = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);

  const toggleMapVisibility = () => {
    setIsMapVisible(!isMapVisible);
  };




  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

    return (
        <div className="flex flex-col md:flex-row h-screen">
      {/* Filter Section */}
      <div className="flex-shrink-0 w-full md:w-1/4 bg-white p-6  ">
                <div className="mb-4">
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Enter Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" placeholder="Zip Code" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                </div>

                <div className="mb-4">
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">Price Range</label>
                    <input type="text" id="priceRange" name="priceRange" placeholder="$ Min - $ Max" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rooms & Bathrooms</label>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="allRooms" name="allRooms" className="mr-2" />
                            <label htmlFor="allRooms">All Rooms</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="combinedRooms" name="combinedRooms" className="mr-2" />
                            <label htmlFor="combinedRooms">Combined</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="separateRooms" name="separateRooms" className="mr-2" />
                            <label htmlFor="separateRooms">Separate</label>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mt-2 gap-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="allBathrooms" name="allBathrooms" className="mr-2" />
                            <label htmlFor="allBathrooms">All Bathrooms</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="combinedBathrooms" name="combinedBathrooms" className="mr-2" />
                            <label htmlFor="combinedBathrooms">Combined</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="separateBathrooms" name="separateBathrooms" className="mr-2" />
                            <label htmlFor="separateBathrooms">Separate</label>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">View</label>
                    <select id="view" name="view" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                        <option>All Views</option>
                        <option>Courtyard</option>
                        <option>Street</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="amenity1" name="amenity1" className="mr-2" />
                            <label htmlFor="amenity1">Amenity 1</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="amenity2" name="amenity2" className="mr-2" />
                            <label htmlFor="amenity2">Amenity 2</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="amenity3" name="amenity3" className="mr-2" />
                            <label htmlFor="amenity3">Amenity 3</label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button className="bg-purple-400 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        Apply Filters
                    </button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                        Show Results
                    </button>
                </div>
            </div>

      {/* Property Display Section */}
      <div className="flex-1 bg-white p-6  ">
                <div className="flex justify-between items-center mb-6">
                    <div>
                       
                    <h4 className="text-lg text-gray-700">4 objects found</h4>

                    </div>
                    {/* <h4 className="text-lg text-gray-700">4 objects found</h4> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Property Card 1 */}
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img src="/image/r1.jpg" alt="Property" className="w-full h-40 object-cover" />
                            <button
                            onClick={toggleBookmark}
                            className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full"
                            >
                            <FontAwesomeIcon
                                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
                                className="text-xl"
                            />
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold text-gray-800"> Rs 560,000</p>
                            <p className="text-sm text-gray-500">Property Name</p>
                            <p className="text-sm text-gray-500">123 Pine St, Villa</p>
                            <p className="text-sm text-gray-500">City Name</p>
                        </div>
                    </div>
                    {/* Property Card 2 */}
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img src="/image/r2.jpg" alt="Property" className="w-full h-40 object-cover" />
                            <button
                            onClick={toggleBookmark}
                            className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full"
                            >
                            <FontAwesomeIcon
                                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
                                className="text-xl"
                            />
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold text-gray-800">Rs 560,000</p>
                            <p className="text-sm text-gray-500">Property Name</p>
                            <p className="text-sm text-gray-500">123 Pine St, Villa</p>
                            <p className="text-sm text-gray-500">City Name</p>
                        </div>
                    </div>

                    {/* Property Card 3 */}
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img src="/image/r3.jpg" alt="Property" className="w-full h-40 object-cover" />
                            <button
                            onClick={toggleBookmark}
                            className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full"
                            >
                            <FontAwesomeIcon
                                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
                                className="text-xl"
                            />
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold text-gray-800">Rs 560,000</p>
                            <p className="text-sm text-gray-500">Property Name</p>
                            <p className="text-sm text-gray-500">123 Pine St, Villa</p>
                            <p className="text-sm text-gray-500">City Name</p>
                        </div>
                    </div>

                    {/* Property Card 4 */}
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img src="/image/r4.jpg" alt="Property" className="w-full h-40 object-cover" />
                            <button
                            onClick={toggleBookmark}
                            className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full"
                            >
                            <FontAwesomeIcon
                                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
                                className="text-xl"
                            />
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold text-gray-800">Rs 560,000</p>
                            <p className="text-sm text-gray-500">Property Name</p>
                            <p className="text-sm text-gray-500">123 Pine St, Villa</p>
                            <p className="text-sm text-gray-500">City Name</p>
                        </div>
                    </div>
                </div>
            </div>

      {/* Map Section */}
      {isMapVisible && (
        <div className="w-full md:w-1/4 p-6 bg-white border-l border-gray-300 flex flex-col">
        <button
          onClick={toggleMapVisibility}
          className="mb-4 px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-700 transition"
        >
          Hide Map
        </button>
        <div className="bg-white shadow-lg rounded-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3750390899644!2d-122.40127308468338!3d37.790017779757495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b40b6f1ef%3A0x1c5e1be7b5e4a1b6!2sSF%20Marriott%20Marquis!5e0!3m2!1sen!2sus!4v1641849346383!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      )}
      {!isMapVisible && (
        <button
          onClick={toggleMapVisibility}
          className="absolute top-20 right-4 px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-700 transition"
        >
          Show Map
        </button>
      )}
    </div>
   
    );
};

export default PropertyDashboard;
