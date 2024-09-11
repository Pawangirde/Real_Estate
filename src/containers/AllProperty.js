import React, { useState } from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const AllProperty = () => {
    const [savedProperties, setSavedProperties] = useState([]);
   
    const properties = [
        {
            id: 1,
            name: "Luxury Villa",
            area: "5000",
            address: "Bandra, Mumbai",
            price: "2,50,00,000",
            image: "/image/r1.jpg",
            featured: true,
        },
        {
            id: 2,
            name: "Sea View Apartment",
            area: "1500",
            address: "Marine Drive, Mumbai",
            price: "1,20,00,000",
            image: "/image/r2.jpg",
            featured: false,
        },
        {
            id: 3,
            name: "Penthouse",
            area: "3000",
            address: "Powai, Mumbai",
            price: "3,00,00,000",
            image: "/image/r3.jpg",
            featured: true,
        },
        {
            id: 4,
            name: "Farmhouse",
            area: "10000",
            address: "Lonavala, Pune",
            price: "5,00,00,000",
            image: "/image/r4.jpg",
            featured: false,
        },
        {
            id: 5,
            name: "Commercial Space",
            area: "2000",
            address: "CBD Belapur, Navi Mumbai",
            price: "4,00,00,000",
            image: "/image/r5.jpg",
            featured: true,
        },
        {
            id: 6,
            name: "Studio Apartment",
            area: "800",
            address: "Koregaon Park, Pune",
            price: "80,00,000",
            image: "/image/r6.jpg",
            featured: true,
        },
        {
            id: 7,
            name: "Studio Apartment",
            area: "800",
            address: "Koregaon Park, Pune",
            price: "80,00,000",
            image: "/image/r6.jpg",
            featured: false,
        },
        {
            id: 8,
            name: "Studio Apartment",
            area: "800",
            address: "Koregaon Park, Pune",
            price: "80,00,000",
            image: "/image/r6.jpg",
            featured: true,
        },
        // Add more dummy data as needed
    ];

    // Function to toggle saved status of a property
    const toggleSaved = (propertyId) => {
        if (savedProperties.includes(propertyId)) {
            // Property is saved, so remove it from savedProperties
            setSavedProperties(savedProperties.filter(id => id !== propertyId));
        } else {
            // Property is not saved, so add it to savedProperties
            setSavedProperties([...savedProperties, propertyId]);
        }
    };

    // Function to check if a property is saved
    const isSaved = (propertyId) => {
        return savedProperties.includes(propertyId);
    };

    return (
        <div className="bg-gray-200 p-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-black mb-6">All Properties</h2>

                {/* Grid for Property Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {properties.map((property) => (
                        <div key={property.id} className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            {property.featured && (
                                <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 absolute top-2 left-2 rounded-full">Featured</span>
                            )}
                            <button
                                onClick={() => toggleSaved(property.id)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full absolute top-2 right-2"
                            >
                                {isSaved(property.id) ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
                            </button>
                            <img
                                src={property.image}
                                alt={property.name}
                                className="w-full h-44 object-cover object-center"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{property.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    {property.area} sqft | {property.address}
                                </p>
                                <p className="text-lg font-bold text-purple-600">${property.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProperty;
