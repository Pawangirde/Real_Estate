import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="text-black py-10 bg-blue-200">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                {/* Column 1: Logo and Company Name */}
                <div>
                    <div className="flex flex-col items-center mb-4">
                        <div className="text-2xl font-bold">Houzza</div>
                    </div>
                    <p className="text-black">Your trusted real estate partner.</p>
                </div>

                {/* Column 2: Social Icons */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                            <Facebook fontSize="large" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                            <Twitter fontSize="large" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                            <Instagram fontSize="large" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                            <LinkedIn fontSize="large" />
                        </a>
                    </div>
                </div>

                {/* Column 3: About, Terms, Privacy */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Company</h3>
                    <ul>
                        <li className="mb-2">
                            <Link to="/aboutus" className="text-black hover:text-white">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/terms" className="text-black hover:text-white">Terms & Conditions</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/privacy" className="text-black hover:text-white">Privacy Policy</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/contact" className="text-black hover:text-white">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-5 text-center">
                <p className="text-black">&copy; {new Date().getFullYear()} Houzza. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
