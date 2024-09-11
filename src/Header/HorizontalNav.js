import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HorizontalNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-200 p-3 flex items-center justify-between">
            <div className="text-lg font-bold">
                <Link to="/">
                    <img
                        src="/image/app.png"
                        alt="Houzza Logo"
                        style={{
                            width: '75px',  // Adjust the width as needed
                            height: '60px'   // Height will adjust proportionally
                        }}
                    />
                </Link>
            </div>
            <div className="lg:hidden">
                <IconButton onClick={toggleMenu}>
                    {isOpen ? <CloseIcon style={{ color: 'white' }} /> : <MenuIcon style={{ color: 'white' }} />}
                </IconButton>
            </div>
            <ul className={`lg:flex lg:items-center lg:gap-4 ${isOpen ? 'block' : 'hidden'} lg:block text-sm`}>
                <li className="text-black hover:text-gray-300">
                    <Link to='/download'>
                        <PhoneAndroidIcon style={{ color: 'black' }} /> Download App
                    </Link>
                </li>

                <li className="text-black hover:text-gray-300">
                    <Link to='/savedsearch'>
                        <FavoriteIcon style={{ color: 'black' }} /> Saved
                    </Link>
                </li>


                <li className="text-black hover:text-gray-300">
                    <Link to='/property'>Properties</Link>
                </li>

                <li className="text-black hover:text-gray-300">
                    <Link to='/post-property'>Post-Property</Link>
                </li>
                <li className="text-black hover:text-gray-300">
                    <Link to='/login'>Login</Link>
                </li>
                <li className="text-black hover:text-gray-300">
                    <Link to='/profile'><PersonIcon style={{ color: 'black' }} /></Link>
                </li>
            </ul>
        </nav>
    );
};

export default HorizontalNav;
