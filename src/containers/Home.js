import React, { useState } from "react";
import { Helmet } from "react-helmet";

import PropertySearch from "../containers/PropertySearch";
import RecommendedProperties from "../containers/RecommendedProperties";
import OffersForYou from "../containers/OffersForYou";
// import CategorySlider from "../containers/CategorySlider";
// import TopRatedDevelopers from "../containers/TopRatedDevelopers";
import Contact from "../containers/Contact";
import Spotlight from "../containers/Spotlight";
import Adviser from "./Adviser";
import Post_Property from "./Post_Property";
import Explore from "./Explore";
import Cities from "./Cities";
import BHK_MIND from "./BHK_MIND";
import ManyMore from "./ManyMore";
const Home = () => {
    const [listings, setListings] = useState([]);

    return (
        <>
            <Helmet>
                <title>Real Estate - Home</title>
                <meta name="description" content="sign up page" />
            </Helmet>
           
            <section className="">
                <PropertySearch setListings={setListings} />
                <Cities />
                
                <RecommendedProperties />
                <Explore />
                <Adviser />
                <ManyMore />
                <BHK_MIND />
                <Spotlight />
                <Post_Property />
            </section>
        </>
    );
};

export default Home;
