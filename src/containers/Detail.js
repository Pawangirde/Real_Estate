import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Wifi as WiFiIcon,
    DirectionsBus as DirectionsBusIcon,
    Elevator as ElevatorIcon,
    Pool as PoolIcon,
    Tv as TvIcon,
    AcUnit as AcUnitIcon,
    Person as PersonIcon,
    Phone as PhoneIcon,
} from "@mui/icons-material";

const Detail = () => {
    let { id } = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const property = {
        id: id,
        name: "Luxury Villa",
        area: "5000",
        address: "Bandra, Mumbai",
        price: "2,50,00,000",
        images: [
            "/image/r1.jpg", "/image/r2.jpg", "/image/r3.jpg",
            "/image/r1.jpg", "/image/r1.jpg", "/image/r1.jpg"
        ], // Array of images
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        amenities: ["WiFi", "Transport", "Elevator", "Pool", "TV", "Air Conditioned"],
        owner: "John Doe",
    };

    const amenityIcons = {
        WiFi: <WiFiIcon />,
        Transport: <DirectionsBusIcon />,
        Elevator: <ElevatorIcon />,
        Pool: <PoolIcon />,
        TV: <TvIcon />,
        "Air Conditioned": <AcUnitIcon />,
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Explore Detail Of Property</h2>

            <div className="flex justify-center items-center">
                <div className="w-full max-w-5xl">
                    <div className="rounded-lg overflow-hidden bg-white">
                        {/* Image Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {property.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`property-${index}`}
                                    className={`object-cover ${
                                        index === 0 ? 'col-span-2 row-span-2 h-96' :
                                        index === 1 ? 'h-48' :
                                        index === 2 ? 'h-64' :
                                        index === 3 ? 'h-32' :
                                        index === 4 ? 'h-80' : 'h-48'
                                    } w-full`}
                                />
                            ))}
                        </div>

                        {/* Property Details */}
                        <div className="p-6">
                            <h3 className="text-3xl font-semibold mb-2 text-gray-800">{property.name}</h3>
                            <p className="text-lg text-gray-600 mb-4">{property.address}</p>
                            <p className="text-lg font-bold text-purple-600">${property.price}</p>

                            {/* Amenities */}
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">Amenities</h4>
                                {property.amenities && property.amenities.length > 0 ? (
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {property.amenities.map((amenity, index) => (
                                            <div key={index} className="flex items-center">
                                                <span className="mr-2 text-gray-700">{amenityIcons[amenity]}</span>
                                                <span className="text-gray-700">{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No amenities specified</p>
                                )}
                            </div>

                            {/* Property Description */}
                            <h4 className="text-xl font-semibold mt-4 text-gray-800">About Property</h4>
                            <p className="mt-4 text-sm text-gray-700">{property.description}</p>

                            {/* Location */}
                            <div className="mt-6">
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">Location</h4>
                                <iframe
                                    title="Property Location"
                                    className="w-full h-80 border-0"
                                    src={`https://maps.google.com/maps?q=${property.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                ></iframe>
                                <div className="mt-4 text-center">
                                    <button
                                        className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                                        onClick={openModal}
                                    >
                                        Enquire Now
                                    </button>
                                </div>
                            </div>

                            {/* Owner Details */}
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <PersonIcon className="text-gray-600 mr-2" />
                                    <span className="text-lg text-gray-700">{property.owner}</span>
                                    <button
                                        className="ml-4 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                                        onClick={() => alert("Call Now")}
                                    >
                                        <PhoneIcon className="text-white mr-2" />
                                        Call Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <h3 className="text-2xl font-semibold mb-4">Enquiry Form</h3>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        rows="4"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-between">
                    {/* Cancel button */}
                    <button
                        type="button"
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>

                    {/* Submit button */}
                    <button
                        type="button"
                        className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                        onClick={closeModal}
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* Close icon */}
            <button
                type="button"
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
            >
                &times;
            </button>
        </div>
    </div>
)}

        </div>
    );
};

export default Detail;
