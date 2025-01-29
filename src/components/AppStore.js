import React from "react";
import sampleImage from "../Asset/vecteezy_smartphone-and-mobile-phone_11047522.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function AppStore() {
  return (
    <div className="flex flex-col md:flex-row items-center text-white bg-primary justify-between w-full pt-16 px-6 md:px-16">
      {/* Left Section */}
      <div className="text-left md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl font-bold pb-4">
          Manage Your Services by your <br />
          Mobile Phone
        </h2>
        <p className="mt-2 mb-8 text-gray-400 text-sm sm:text-base">
          Download our app to manage and track your services. Our app <br />
          enables you to stay in touch with our experts and aids you in
          tracking your progress.
        </p>
        <p className="mb-4 text-sm sm:text-base">Get the App</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
          {/* App Store Button */}
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
            <FaApple className="text-3xl mr-4 text-green-500" />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-lg font-bold">App Store</p>
            </div>
          </button>
          {/* Google Play Button */}
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
            <FaGooglePlay className="text-3xl mr-4 text-green-500" />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-lg font-bold">Google Play</p>
            </div>
          </button>
        </div>
      </div>

      {/* Right Section (Image Section) */}
      <div className="relative flex-shrink-0 md:w-1/2 flex flex-row items-center justify-center space-x-4 overflow-hidden">
        <div className="w-full max-w-xs md:max-w-md">
          <img
            src={sampleImage}
            alt="Phone 1"
            className="w-full h-auto object-cover rounded-lg transform md:translate-x-20 translate-x-10 translate-y-20"
          />
        </div>

       
      </div>
    </div>
  );
}

export default AppStore;
