import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { connect } from "react-redux";
import setAlert from "../store/actions/alert";
import Loader from "react-loader-spinner";
import { Email, LocationOn, Phone } from "@material-ui/icons";

const Contact = ({ setAlert }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/contacts/`,
        { name, email, subject, message },
        config
      )
      .then((res) => {
        setAlert("Message Sent", "success");
        setLoading(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setAlert("Error with Sending Message", "error");
        setLoading(false);
        window.scrollTo(0, 0);
      });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact min-h-screen bg-gray-100 px-4">
      <Helmet>
        <title>Real Estate - Contact</title>
        <meta name="description" content="Contact us" />
      </Helmet>
     
      <div className="container mx-auto max-w-6xl bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-black-500 text-center mb-3">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="address flex items-start mb-6">
              <LocationOn className="text-purple-500" style={{ fontSize: 40 }} />
              <div className="ml-4">
                <h4 className="text-xl font-semibold">Location:</h4>
                <p className="text-gray-600">B2-710, Balewadi High Street, PN, Pune, 123456, Maharashtra</p>
              </div>
            </div>
            <div className="email flex items-start mb-6">
              <Email className="text-purple-500" style={{ fontSize: 40 }} />
              <div className="ml-4">
                <h4 className="text-xl font-semibold">Email:</h4>
                <p className="text-gray-600">example@gmail.com</p>
              </div>
            </div>
            <div className="phone flex items-start mb-6">
              <Phone className="text-purple-500" style={{ fontSize: 40 }} />
              <div className="ml-4">
                <h4 className="text-xl font-semibold">Phone:</h4>
                <p className="text-gray-600">+91 1234567890</p>
              </div>
            </div>
            <div>
              <iframe
                width="100%"
                height="250"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name <span className="text-red-500"> *</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => onChange(e)}
                  value={name}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email <span className="text-red-500"> *</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => onChange(e)}
                  value={email}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject <span className="text-red-500"> *</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="subject"
                  type="text"
                  placeholder="Buying Home"
                  onChange={(e) => onChange(e)}
                  value={subject}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message <span className="text-red-500"> *</span>
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  style={{ resize: "none" }}
                  onChange={(e) => onChange(e)}
                  value={message}
                />
              </div>
              {loading ? (
                <div className="my-3 flex justify-center">
                  <Loader type="Oval" color="#424242" height={50} width={50} />
                </div>
              ) : (
                <div className="send-btn flex justify-center">
                  <button
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setAlert })(Contact);
