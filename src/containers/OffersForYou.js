import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/RecommendedProperties.css";

const OffersForYou = () => {
    // Static data for offers
    const offers = [
        {
            id: 1,
            name: "Exclusive Beachfront Villa",
            area: "6000",
            address: "Goa",
            price: "3,50,00,000",
            image: "/image/offer1.jpg",
        },
        {
            id: 2,
            name: "Mountain View Retreat",
            area: "2500",
            address: "Manali",
            price: "2,00,00,000",
            image: "/image/offer2.jpg",
        },
        {
            id: 3,
            name: "Urban Loft in Downtown",
            area: "1800",
            address: "New York",
            price: "5,00,00,000",
            image: "/image/offer3.jpg",
        },
        {
            id: 4,
            name: "Historic Mansion",
            area: "8000",
            address: "London",
            price: "7,00,00,000",
            image: "/image/offer4.jpg",
        },
        {
            id: 5,
            name: "Luxury Apartment",
            area: "2000",
            address: "Paris",
            price: "4,50,00,000",
            image: "/image/offer5.jpg",
        },
    ];

    // Slider settings
    const settings = {
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
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-black-500 tracking-wide">Explore Featured Properties</h2>
                <Slider {...settings} className="slider-container">
                    {offers.map((offer) => (
                        <div key={offer.id} className="mx-2 p-2">
                            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 text-center">
                                <img
                                    src={offer.image}
                                    alt={offer.name}
                                    className="w-full h-64 object-cover"/>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        <span className="block">{offer.area} sqft</span>
                                        <span className="block">{offer.address}</span>
                                    </p>
                                    <p className="text-lg font-bold text-purple-600">${offer.price}</p>
                                </div>
                                <Link to={`/offer/${offer.id}`} className="absolute inset-0 z-10"></Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OffersForYou;
