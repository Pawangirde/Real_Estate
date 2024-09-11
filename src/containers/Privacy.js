import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. Please read our privacy policy carefully to understand how we handle your information.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h3>
          <p className="text-gray-700 mb-6">
            We collect various types of information in connection with the services we provide, including personal data such as
            your name, email address, and property preferences.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h3>
          <p className="text-gray-700 mb-6">
            The information we collect is used to provide and improve our services, personalize your experience, and communicate
            with you. We may also use your information for marketing purposes with your consent.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing Your Information</h3>
          <p className="text-gray-700 mb-6">
            We do not sell your personal information. However, we may share your information with trusted third-party service
            providers to assist in delivering our services. These third parties are required to keep your information confidential
            and use it only for the purposes specified by us.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Security of Your Information</h3>
          <p className="text-gray-700 mb-6">
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However,
            no internet-based service can be completely secure, so we cannot guarantee absolute security.
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default Privacy;
