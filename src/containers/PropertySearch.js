import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PropertySearch.css";

const PropertySearch = (props) => {
    const [keywords, setKeywords] = useState("");
    const [selectedOption, setSelectedOption] = useState("Buy");
    const [bgImage, setBgImage] = useState("/image/bgbg1.jpg");

    const onChange = (e) => {
        setKeywords(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios
            .post(
                `${process.env.REACT_APP_API_URL}/api/listings/search`,
                { keywords },
                config
            )
            .then((res) => {
                props.setListings(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        let newBgImage = "/image/bg.jpg";
        switch (option) {
            case "Buy":
                newBgImage = "/image/buy.jpg";
                break;
            case "Rent":
                newBgImage = "/image/rent.jpg";
                break;
            case "Sell":
                newBgImage = "/image/sell.jpg";
                break;
            case "PG":
                newBgImage = "/image/pg.jpg";
                break;
            default:
                newBgImage = "/image/sbg.jpg";
        }
        setBgImage(newBgImage);
    };

   

    return (
        <div
            className="search-section relative flex items-center justify-center text-white p-10  rounded-b-2xl bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                minHeight: "70vh",
            }}
        >
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-b-2xl"></div>
            <div className="search-container relative z-20 max-w-xl w-full text-center p-8">
                <h1 className="search-title text-4xl mb-6 font-bold tracking-wide">Find Your Dream Property</h1>
                <div className="options-list flex justify-center flex-wrap gap-4 mb-6">
                    {["Buy", "Rent", "Sell", "PG"].map((option) => (
                        <button
                            key={option}
                            className={`option-button py-2 px-4 rounded-full transition-transform transform ${
                                selectedOption === option
                                    ? "bg-white text-black"
                                    : "bg-purple-600 text-white hover:bg-purple-700"
                            }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <form className="search-form flex justify-center items-center w-full mb-8" onSubmit={onSubmit}>
                    <input
                        className="search-input py-3 px-4 rounded-l-full w-full max-w-lg outline-none shadow-lg text-black"
                        type="text"
                        placeholder={`Search properties to ${selectedOption.toLowerCase()} by location...`}
                        value={keywords}
                        onChange={onChange}
                    />
                    <button className="search-button py-2 px-3 bg-yellow-600 text-black rounded-r-full hover:bg-yellow-700 transition">
                        <FontAwesomeIcon icon={faSearch} className="" /> Search
                    </button>
                </form>
                {/* <div className="popular-localities">
                    <h2 className="popular-heading text-2xl font-semibold mb-6">Popular Localities</h2>
                    <Slider {...sliderSettings} className="localities-slider">
                        {["Pune", "Mumbai", "Delhi", "Banglore", "Hyderabad"].map((locality) => (
                            <div key={locality} className="locality-item bg-white bg-opacity-10 text-black p-1 m-2 rounded-lg shadow-lg transition-transform transform hover:bg-opacity-30">
                                {locality}
                            </div>
                        ))}
                    </Slider>
                </div> */}
            </div>
        </div>
    );
};

export default PropertySearch;
