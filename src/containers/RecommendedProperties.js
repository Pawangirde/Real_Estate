import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/RecommendedProperties.css";

const RecommendedProperties = () => {
    const [savedProperties, setSavedProperties] = useState([]);

    // Static data for recommended properties
    const properties = [
        { id: 1, name: "Luxury Villa", area: "5000", address: "Bandra, Mumbai", price: "2,50,00,000", image: "/image/r1.jpg" },
        { id: 2, name: "Sea View Apartment", area: "1500", address: "Marine Drive, Mumbai", price: "1,20,00,000", image: "/image/r2.jpg" },
        { id: 3, name: "Penthouse", area: "3000", address: "Powai, Mumbai", price: "3,00,00,000", image: "/image/r3.jpg" },
        { id: 4, name: "Farmhouse", area: "10000", address: "Lonavala, Pune", price: "5,00,00,000", image: "/image/r4.jpg" },
        { id: 5, name: "Commercial Space", area: "2000", address: "CBD Belapur, Navi Mumbai", price: "4,00,00,000", image: "/image/r5.jpg" },
        { id: 6, name: "Studio Apartment", area: "800", address: "Koregaon Park, Pune", price: "80,00,000", image: "/image/r6.jpg" },
    ];

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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const toggleSaveProperty = (propertyId) => {
        if (savedProperties.includes(propertyId)) {
            setSavedProperties(savedProperties.filter(id => id !== propertyId));
        } else {
            setSavedProperties([...savedProperties, propertyId]);
        }
    };

    return (
        <div className="bg-orange-50 p-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-black-500 tracking-wide">All Featured Properties</h2>
                    <Link
                        to="/allproperties"
                        className="bg-purple-400 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                    >
                        See All
                    </Link>
                </div>
                <Slider {...settings} className="slider-container">
                    {properties.map((property) => (
                        <div key={property.id} className="relative mx-2 p-2">
                            {/* Wrap the card in a Link component to navigate to property details */}
                            <Link to={`/propertydetails/${property.id}`} className="block no-underline hover:no-underline">
                                <div className="relative rounded-lg overflow-hidden bg-blue-50 ">
                                    <img
                                        src={property.image}
                                        alt={property.name}
                                        className="w-full h-44 object-cover object-center"
                                    />
                                    <button className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full">
                                        <FontAwesomeIcon
                                            icon={savedProperties.includes(property.id) ? solidBookmark : regularBookmark}
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent navigating when clicking the bookmark
                                                toggleSaveProperty(property.id);
                                            }}
                                            className="text-black hover:text-black cursor-pointer text-xl"
                                        />
                                    </button>
                                    <div className="p-4 text-center">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{property.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {property.area} sqft | {property.address}
                                        </p>
                                        <p className="text-lg font-bold text-purple-600">Rs.{property.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default RecommendedProperties;
