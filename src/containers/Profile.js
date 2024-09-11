import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Profile = ({ email }) => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/accounts/${email}/`
                );
                setUserInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserInfo();
    }, [email]);

    const handleLogout = () => {
        // Implement logout logic here
        console.log("User logged out");
    };

    return (
        <>
            <Helmet>
                <title>Real Estate - Profile</title>
                <meta name="description" content="Profile page" />
            </Helmet>
            <div className="min-h-screen py-10 text-center">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-10">
                        <div className="px-8 py-6 flex flex-col md:flex-row">
                            {/* Left Side - User Information */}
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
                                <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Profile</h1>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-lg">
                                    <div className="font-semibold text-gray-600">ID:</div>
                                    <div className="text-gray-800">12345678</div>
                                    <div className="font-semibold text-gray-600">Email:</div>
                                    <div className="text-gray-800">office@gmail.com</div>
                                    <div className="font-semibold text-gray-600">Name:</div>
                                    <div className="text-gray-800">office</div>
                                </div>
                            </div>

                            {/* Right Side - Account Information */}
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Information</h2>
                                <ul className="divide-y divide-gray-200 text-xl">
                                    {/* <li className="py-3">
                                        <Link 
                                            to="/savedsearch" 
                                            className="text-purple-500 hover:text-purple-700 transition-colors duration-200"
                                        >
                                            Save Search
                                        </Link>
                                    </li> */}
                                    <li className="py-3">
                                        <Link 
                                            to="/postedproperties" 
                                            className="text-purple-500 hover:text-purple-700 transition-colors duration-200"
                                        >
                                            Posted Properties
                                        </Link>
                                    </li>
                                    <li className="py-3">
                                        <Link 
                                            to="/changepassword" 
                                            className="text-purple-500 hover:text-purple-700 transition-colors duration-200"
                                        >
                                            Change Password
                                        </Link>
                                    </li>
                                    {/* <li className="py-3">
                                        <Link 
                                            to="/help" 
                                            className="text-purple-500 hover:text-purple-700 transition-colors duration-200"
                                        >
                                            Help
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <div className="px-8 py-6">
                            <button
                                onClick={handleLogout}
                                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-300 transition-colors duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
