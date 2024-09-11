import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) return <Redirect to='/' />;

    return (
        <>
            <Helmet>
                <title>Real Estate - Login</title>
                <meta name='description' content='login page' />
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ minHeight: '80vh' }}>
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg" >
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Login Here</h1>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <input
                                type='email'
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder='Email Address'
                                name='email'
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder='Password'
                                name='password'
                                value={password}
                                minLength='6'
                                onChange={onChange}
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition duration-200"
                        >
                            SIGN IN
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <h5>Don't have an account? <Link to='/signup' className="text-blue-500 hover:text-blue-700">Sign Up</Link></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
