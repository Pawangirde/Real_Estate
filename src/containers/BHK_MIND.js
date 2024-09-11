import React from 'react';
import Slider from 'react-slick';
import { FaHome } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'; // Use this if you are using React Router

const BHK_MIND = () => {
    // Sample data for the cards
    const cards = [
        { id: 1, title: '1 BHK/1 RK', description: '200 properties', link: '/1bhk' },
        { id: 2, title: '2 BHK', description: '400 properties', link: '/2bhk' },
        { id: 3, title: '3 BHK', description: '500 properties', link: '/3bhk' },
        { id: 4, title: '4 BHK', description: '600 properties', link: '/4bhk' },
        { id: 5, title: '4+ BHK', description: '50 properties', link: '/4plusbhk' },
    ];

    // Slider settings
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100">
            {/* Orange Section */}
            <div className="bg-orange-50 py-8 px-4 md:px-12 text-center">
                {/* Icon */}
                
                {/* Heading */}
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Our BHK Categories</h1>
                {/* Subheading */}
                <p className="text-lg md:text-xl text-black mb-2">Find the perfect BHK option that suits your lifestyle</p>
                {/* Card Slider */}
                <div className="relative z-10">
                    <div className="bg-orange-50 bg-opacity-75 p-3 md:p-10 rounded-lg  w-full">
                        <Slider {...settings}>
                            {cards.map((card) => (
                                <div key={card.id} className="p-4">
                                    <Link to="/property" className="no-underline hover:no-underline"> 
                                        <div className="bg-purple-200 p-6 rounded-lg shadow-md border border-gray-200">
                                            <div className="flex justify-center mb-4">
                                                <FaHome className="text-4xl text-purple-600" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                                            <p className="text-gray-600">{card.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BHK_MIND;
