import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signup } from "../store/actions/auth";
import setAlert from "../store/actions/alert";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Signup = ({ setAlert, isAuthenticated, signup }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        re_password: "",
        otp: "", // Added for OTP input
    });

    const [otpSent, setOtpSent] = useState(false); // To track OTP step
    const [isVerified, setIsVerified] = useState(false); // To track OTP verification

    const { email, name, phone, password, re_password, otp } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendOTP = async () => {
        // Simulate an API call to send OTP
        // Replace this with your backend call to send OTP to the user's phone/email
        try {
            // await sendOTPToPhoneAPI(phone);
            setOtpSent(true);
            setAlert("OTP sent to your phone number", "success");
        } catch (error) {
            setAlert("Failed to send OTP", "danger");
        }
    };

    const verifyOTP = async () => {
        // Simulate API call to verify OTP
        // Replace this with your backend call to verify the OTP
        try {
            if (otp === "1234") { // Replace with actual OTP verification logic
                setIsVerified(true);
                setAlert("OTP verified successfully", "success");
            } else {
                setAlert("Invalid OTP", "danger");
            }
        } catch (error) {
            setAlert("Failed to verify OTP", "danger");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!otpSent) {
            if (password !== re_password) {
                setAlert("Passwords do not match", "danger");
            } else {
                sendOTP();
            }
        } else if (!isVerified) {
            verifyOTP();
        } else {
            signup(name, email, phone, password, re_password);
        }
    };

    if (isAuthenticated) return <Redirect to='/' />;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Helmet>
                <title>Real Estate - Signup</title>
                <meta name='description' content='sign up page' />
            </Helmet>
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Create Your Account Here</h1>
                <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
                    {!otpSent && (
                        <>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    name='name'
                                    id='name'
                                    value={name}
                                    onChange={(e) => onChange(e)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    name='email'
                                    id='email'
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='tel'
                                    placeholder='Phone Number'
                                    name='phone'
                                    id='phone'
                                    value={phone}
                                    onChange={(e) => onChange(e)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    id='password'
                                    value={password}
                                    minLength='6'
                                    onChange={(e) => onChange(e)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='re_password'
                                    id='re_password'
                                    value={re_password}
                                    minLength='6'
                                    onChange={(e) => onChange(e)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {otpSent && !isVerified && (
                        <div>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                name="otp"
                                id="otp"
                                value={otp}
                                onChange={(e) => onChange(e)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                    )}

                    {otpSent && isVerified && (
                        <div className="text-green-600 text-center">
                            OTP verified! You can now complete the signup.
                        </div>
                    )}

                    <button
                        type='submit'
                        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition duration-200"
                    >
                        {otpSent && !isVerified ? "Verify OTP" : "SIGN UP"}
                    </button>
                </form>

                <div className="text-center my-4"> 
                    <h2 className="text-gray-600 font-medium">Or Sign Up with</h2>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                        >
                            <FaFacebook size={20} />
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600"
                        >
                            <FaGoogle size={20} />
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500"
                        >
                            <FaTwitter size={20} />
                        </button>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <h5>Already have an Account? <Link to='/login' className="text-blue-500 hover:text-blue-700">Login</Link></h5>
                </div>
            </div>
        </div>
    );
};

Signup.propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signup })(Signup);
