import React from 'react';
import ContactSection from './ContactSection';

const ContactUs = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      {/* Large Image */}
      <div style={{ width: '', height: '' }} className="bg-gray-200">
        <img src="path_to_your_large_image.jpg" alt="Large Image" className="w-full h-full object-cover" />
      </div>

      {/* Split Box */}
      <div className="flex flex-row w-[6449px] h-[5566px] mt-10">
        {/* Left Side Image */}
        <div className="w-1/2 bg-gray-300">
          <img src="path_to_half_image.jpg" alt="Half Image" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Contact Form */}
        <ContactSection />
        <h1>Hekko there</h1>
      </div>
    </div>
    </>
  );
};

export default ContactUs;

