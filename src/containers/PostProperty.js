import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const PostProperty = () => {
    const history = useHistory();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    const [formData, setFormData] = useState({
        user_id: '',
        property_category_type: '',
        property_owner_type: 'Owner',
        address: '',
        city_name: '',
        property_type: '',
        property_name: '',
        property_price: '',
        safety_deposit: '',
        property_description: '',
        latitude: '',
        longitude: '',
        available_on_date: '',
        expiry_date: '',
        property_added_date: '',
        flat_type: '',
        units: '',
        additional_info: '', // New field for the additional step
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'property_images') {
            // Handle file uploads
            setFormData({
                ...formData,
                [name]: files
            });
        } else {
            // Handle other form inputs
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    


    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAlert(null);
    
        const data = new FormData();
        for (let key in formData) {
            if (Array.isArray(formData[key])) {
                for (let i = 0; i < formData[key].length; i++) {
                    data.append('property_images[]', formData[key][i]);
                }
            } else {
                data.append(key, formData[key]);
            }
        }
    
        try {
            await axios.post('http://your-django-api-endpoint/properties/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setLoading(false);
            setAlert({ type: 'success', message: 'Property posted successfully!' });
            history.push('/');
        } catch (error) {
            setLoading(false);
            setAlert({ type: 'error', message: 'There was an error posting the property!' });
            console.error(error);
        }
    };
    

    const handleNextStep = () => setStep(step + 1);
    const handlePreviousStep = () => setStep(step - 1);

    const stepLabels = ["Basic Info", "Property Pricing", "Property Details", "More Details", "Additional Info"]; // New step label

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  py-4  bg-white text-black">
             <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2 text-black">Post a Property</h1>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Your Property Details</h2>
                <p className="text-gray-500">Fill out the form below to list your property. Provide as much detail as possible to help potential buyers or renters find what they're looking for.</p>
            </div>
            
            {/* Step Indicator */}
            <div className="relative w-full max-w-6xl mb-10">
                <div className="flex justify-between items-center w-full">
                    {stepLabels.map((label, index) => (
                        <div className="relative flex-1" key={index}>
                            {/* Conditionally render the horizontal line only if it's not the last step */}
                            {index !== stepLabels.length - 1 && (
                                <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-400 transform -translate-y-1/2 z-0"></div>
                            )}
                           <div
                            style={{ width: '150px' }} // Adjust the width as needed
                            className={`relative z-10 h-12 rounded-full flex items-center justify-center font-semibold text-black transition-all duration-500 ease-in-out ${step >= index + 1 ? 'bg-white shadow-lg border-2 border-indigo-500 transform scale-110' : 'bg-gray-200 border-2 border-gray-500'}`}
                            >
                            {label}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Form */}
            <form className="w-full max-w-4xl bg-white text-gray-800 p-8 rounded-xl shadow-2xl space-y-8 transform transition-all duration-500" onSubmit={handleSubmit}>
                {/* Alerts */}
                {alert && (
                    <div className={`p-4 mb-4 text-white rounded ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {alert.message}
                    </div>
                )}

                {/* Step 1 */}
                {step === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_category_type">Property Category Type</label>
                            <select
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                name="property_category_type"
                                value={formData.property_category_type}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Category Type</option>
                                <option value="Residential">Residential</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Land">Land</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_owner_type">Property Owner Type</label>
                            <select
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                name="property_owner_type"
                                value={formData.property_owner_type}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Owner Type</option>
                                <option value="Owner">Owner</option>
                                <option value="Dealer">Dealer</option>
                                <option value="Developer">Developer</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="address">Address</label>
                            <textarea
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                name="address"
                                placeholder="Enter Address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="3" // Adjust the number of rows as needed
                                required
                            />
                        </div>


                    </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_field">Property Type</label>
                            <select
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                name="property_field"
                                value={formData.property_field}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Property Type</option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Villa">Villa</option>
                                <option value="Open House">Open House</option>
                                <option value="Farmhouse">Farmhouse</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_name">Property Name</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="text"
                                name="property_name"
                                placeholder="Enter Property Name"
                                value={formData.property_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_price">Property Price</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="number"
                                name="property_price"
                                placeholder="Enter Property Price"
                                value={formData.property_price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="safety_deposit">Safety Deposit</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="number"
                                name="safety_deposit"
                                placeholder="Enter Safety Deposit"
                                value={formData.safety_deposit}
                                onChange={handleChange}
                                required
                            />
                        </div>



                    </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_description">Property Description</label>
                            <textarea
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                name="property_description"
                                placeholder="Enter Property Description"
                                value={formData.property_description}
                                onChange={handleChange}
                                rows="4" // Adjust the number of rows as needed
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="available_on_date">Available On</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="date"
                                name="available_on_date"
                                value={formData.available_on_date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="expiry_date">Expiry Date</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="date"
                                name="expiry_date"
                                value={formData.expiry_date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_added_date">Property Added Date</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="date"
                                name="property_added_date"
                                value={formData.property_added_date}
                                onChange={handleChange}
                                required
                            />
                        </div>



                    </div>
                )}

                {/* Step 4 (More Details) */}
                {step === 4 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="flat_type">Flat Type</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="text"
                                name="flat_type"
                                placeholder="Enter Flat Type"
                                value={formData.flat_type}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="units">Units</label>
                            <input
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                type="number"
                                name="units"
                                placeholder="Enter Units"
                                value={formData.units}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="bhk_type">BHK Type</label>
                            <select
                                className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                                name="bhk_type"
                                value={formData.bhk_type}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select BHK Type</option>
                                <option value="1 BHK">1 BHK</option>
                                <option value="2 BHK">2 BHK</option>
                                <option value="3 BHK">3 BHK</option>
                                <option value="4 BHK">4 BHK</option>
                                <option value="5 BHK">5 BHK</option>
                                <option value="Studio">Studio</option>
                                <option value="Penthouse">Penthouse</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                    </div>
                )}

                {/* Step 5 (Additional Info) */}
                {step === 5 && (
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="property_images">Property Images</label>
                        <input
                            className="w-full px-4 py-2 border-2 border-indigo-400 rounded-xl focus:outline-none focus:border-indigo-600 transition-all duration-300"
                            type="file"
                            name="property_images"
                            accept="image/*"
                            multiple
                            onChange={handleChange}
                        />
                        <p className="text-gray-500 text-xs mt-2">You can select multiple images (max 4). Supported formats: JPG, PNG, GIF.</p>
                    </div>
                
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                    {step > 1 && (
                        <button type="button" className="px-6 py-2 bg-indigo-600 text-white rounded-xl" onClick={handlePreviousStep}>
                            Previous
                        </button>
                    )}
                    {step < 5 && (
                        <button type="button" className="px-6 py-2 bg-indigo-600 text-white rounded-xl" onClick={handleNextStep}>
                            Next
                        </button>
                    )}
                    {step === 5 && (
                        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-xl" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default PostProperty;
