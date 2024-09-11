import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Terms & Conditions</h2>
          <p className="text-lg text-gray-600">
            Please read our terms and conditions carefully before using our services.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
          <p className="text-gray-600 mb-6">
            Welcome to our real estate platform. By accessing or using our services, you agree to be bound by these terms
            and conditions. If you do not agree with any part of these terms, you must not use our services.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of the Website</h3>
          <p className="text-gray-600 mb-6">
            Our website is intended for use by individuals seeking to buy, sell, or rent properties. You may not use the
            website for any illegal or unauthorized purposes. You must comply with all applicable laws and regulations.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Property Listings</h3>
          <p className="text-gray-600 mb-6">
            All property listings on our website are provided by third-party users. We do not guarantee the accuracy,
            completeness, or reliability of any listing. It is your responsibility to verify all information before making
            any decisions based on the listings.
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default Terms;
