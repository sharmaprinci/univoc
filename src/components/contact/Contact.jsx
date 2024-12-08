import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10"
      style={{
        background: "linear-gradient(245.63deg, #FFFFFF 0.43%, rgba(91, 163, 186, 0.4) 88.71%)",
      }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

      {/* Contact Details */}
      <div className="glass-effect p-8 w-full max-w-4xl text-gray-700 space-y-8">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-green-500 text-2xl" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>xxxxxxxxx</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-2xl" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>info@Univoc.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 text-2xl" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>Univoc, Noida</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="mt-8 glass-effect p-8 w-full max-w-4xl text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-300 mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
