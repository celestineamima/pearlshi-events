import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="w-1/2 bg-white flex flex-col p-10">
      <h1 className="text-4xl font-bold mb-6">CONTACT US</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-lg mb-2">Your Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-lg mb-2">Your Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-lg mb-2">Subject</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-lg mb-2">Your Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </form>

      {/* Contact Info */}
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
    </div>
  );
};

export default ContactSection;
