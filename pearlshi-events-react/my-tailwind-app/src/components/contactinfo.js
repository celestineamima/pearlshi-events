import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
      <div className="flex items-center mb-2">
        <FaWhatsapp className="text-2xl mr-2" />
        <a href="https://wa.me/0759108174" className="text-lg">Let's Chat</a>
      </div>
      <div className="flex items-center mb-2">
        <FaPhone className="text-2xl mr-2" />
        <span className="text-lg">0759108174</span>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-2xl mr-2" />
        <span className="text-lg">pearlcaterers@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
