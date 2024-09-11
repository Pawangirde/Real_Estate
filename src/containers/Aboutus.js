import React from 'react';

const Aboutus = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Learn more about our journey and what we stand for.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Our Story"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4">
              We started with a mission to help people find their dream homes.
              Over the years, we have grown into a trusted real estate agency
              that connects buyers with sellers and renters with landlords.
            </p>
            <p className="text-gray-600 mb-4">
              Our team is dedicated to providing exceptional service and making
              the home buying, selling, or renting process as smooth as possible.
            </p>
            <p className="text-gray-600">
              With our extensive knowledge of the market and our commitment to
              customer satisfaction, we strive to exceed your expectations and
              help you find the perfect property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
