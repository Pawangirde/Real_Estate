import React from "react";
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
} from "@mui/icons-material"; // Import specific icons with correct names

const Offer = () => {
    let { id } = useParams();

    const property = {
        id: id,
        name: "Luxury Villa",
        area: "5000",
        address: "Bandra, Mumbai",
        price: "2,50,00,000",
        images: ["/image/r1.jpg", "/image/r2.jpg", "/image/r3.jpg", "/image/r1.jpg", "/image/r1.jpg", "/image/r1.jpg"], // Array of images
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

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-black-500">Explore Offers On Property</h2>

            <div className="flex justify-center items-center">
                <div className="w-full">
                    <div className="rounded-lg overflow-hidden bg-gray-200">
                        <div className="grid grid-cols-3 gap-4 grid-flow-row-dense">
                            {property.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`property-${index}`}
                                    className={`object-cover object-center ${
                                        index === 0 ? 'col-span-2 row-span-2 h-96 w-full' :
                                        index === 1 ? 'h-48 w-full' :
                                        index === 2 ? 'h-64 w-full' :
                                        index === 3 ? 'h-32 w-full' :
                                        index === 4 ? 'h-80 w-full' : 'h-48 w-full'
                                    }`}
                                />
                            ))}
                        </div>
                        <div className="p-4">
                            <h3 className="text-3xl font-semibold mb-2 text-gray-800">{property.name}</h3>
                            <p className="text-lg text-gray-600 mb-4">{property.address}</p>
                            <p className="text-lg font-bold text-purple-600">${property.price}</p>
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">Amenities</h4>
                                {property.amenities && property.amenities.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        {property.amenities.map((amenity, index) => (
                                            <div key={index} className="flex items-center">
                                                <span className="mr-2">
                                                    {amenityIcons[amenity]}
                                                </span>
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No amenities specified</p>
                                )}
                            </div>
                            <h4 className="text-xl font-semibold mt-4 text-gray-800">About Property</h4>
                            <p className="mt-4 text-sm text-gray-700">{property.description}</p>

                            <div className="mt-6">
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">Location</h4>
                                <iframe
                                    title="Property Location"
                                    className="w-full h-80"
                                    src={`https://maps.google.com/maps?q=${property.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                ></iframe>
                                <div className="mt-4 text-center">
                                    <button
                                        className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                                        onClick={() => alert("Call Now")}
                                    >
                                        Call Now for Location information
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <PersonIcon className="text-gray-600 mr-2" />
                                    <span className="text-lg text-gray-700">{property.owner}</span>
                                    <button
                                        className="ml-4 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                                        onClick={() => alert("Call Now")}
                                    >
                                        <PhoneIcon className="text-white mr-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Offer