import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Listing from "../containers/Listing";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Contact from "../containers/Contact";
import ListingDetail from "../containers/ListingDetail";
import Profile from "../containers/Profile";
import NotFound from "../containers/NotFound";
import PostProperty from "../containers/PostProperty";
import PropertyDashboard from "../containers/PropertyDashboard";
import Offer from "../containers/Offer";
import AllProperty from "../containers/AllProperty";
import Detail from "../containers/Detail";
import AllDeveloper from "../containers/AllDeveloper";
import SavedSearch from "../containers/SavedSearch";
import PostedProperties from "../containers/PostedProperties";
import ChangePassword from "../containers/ChangePassword";
import Download from "../containers/Download";
import City_Wise from "../containers/City_Wise";
import Aboutus from "../containers/Aboutus";
import Terms from "../containers/Terms";
import Privacy from "../containers/Privacy";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/listing" component={Listing} />
                <Route exact path="/listing/:id" component={ListingDetail} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/post-property" component={PostProperty} />
                <Route path="/property" component={PropertyDashboard} />
                <Route path="/allproperties" component={AllProperty} />
                <Route path="/alldeveloper" component={AllDeveloper} />
                <Route path="/offer/:id" component={Offer} />
                {/* <Route path="/details" component={Detail} /> */}
                <Route path="/propertydetails/:id" component={Detail} />
                <Route path="/savedsearch" component={SavedSearch} />
                <Route path="/postedproperties" component={PostedProperties} />
                <Route path="/changepassword" component={ChangePassword} />
                <Route path="/download" component={Download} />
                <Route path="/citywiseproperties" component={City_Wise} />
                <Route path="/aboutus" component={Aboutus} />
                <Route path="/terms" component={Terms} />
                <Route path="/privacy" component={Privacy} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default Routes;
