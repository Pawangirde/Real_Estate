import React from 'react';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';

// Sample developers data with right-side image
const developers = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Lead Architect',
        projectName: 'Sunrise Towers',
        location: 'Los Angeles',
        priceRange: '$8,000 - $15,000',
        profileImage: '/image/r1.jpg',
    },
    {
        id: 2,
        name: 'Sarah Brown',
        role: 'Design Director',
        projectName: 'Vista Verde',
        location: 'Miami',
        priceRange: '$6,500 - $10,000',
        profileImage: '/image/r1.jpg',
        
    },
];

const Arrow = ({ className, onClick, direction }) => (
    <IconButton
        className={`${className} absolute top-1/2 transform -translate-y-1/2 ${direction === 'prev' ? 'left-4 lg:left-8' : 'right-4 lg:right-8'} text-white bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg z-10`}
        onClick={onClick}
    >
        {/* Custom arrows or icons here */}
    </IconButton>
);

const Spotlight = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="p-8 lg:p-16 bg-gray-200 rounded-lg shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Meet Our Experts</h1>
                    <h3 className="text-xl lg:text-2xl text-gray-600">The masterminds behind our iconic projects</h3>
                </div>
            </div>

            <div className="relative">
                <Slider {...settings}>
                    {developers.map(developer => (
                        <div key={developer.id} className="p-4">
                            <div className="card bg-purple-100 p-3 rounded-lg  lg:flex lg:flex-row ">
                                
                                {/* Left Side - Developer Info */}
                                <div className="lg:w-1/2 relative group overflow-hidden rounded-lg">
                                <img 
                                    src={developer.profileImage} 
                                    alt={developer.name} 
                                    style={{ width: '700px', height: '300px' }} // Example fixed dimensions
                                    className="object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
                                />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100 duration-500">
                                        
                                    </div>
                                        <div className="absolute bottom-4 left-4 z-10 text-white">
                                            <h3 className="text-3xl font-bold">{developer.name}</h3>
                                            <p className="text-lg">{developer.role}</p>
                                        </div>
                                    </div>


                                {/* Right Side - Project Info */}
                                <div className="lg:w-1/2 p-6 flex flex-col justify-between text-center">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-gray-800">{developer.projectName}</h4>
                                        <p className="text-gray-500 mt-2 text-sm lg:text-base">{developer.location}</p>
                                        <p className="text-gray-700 text-sm lg:text-base mt-4">Price Range: <span className="text-purple-500">{developer.priceRange}</span></p>
                                    </div>

                                    <p className="mt-4">
                                            <a href={`/project-details/${developer.id}`} className="text-blue-500 no-underline hover:no-underline">View Details</a>
                                        </p>

                                    <div className="mt-6 lg:mt-auto">
                                        <a href="#" className="inline-block bg-purple-400 text-white text-sm lg:text-base px-5 py-3 rounded-lg hover:bg-purple-600 transition-colors no-underline hover:no-underline" >Enquire With Developer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Spotlight;
