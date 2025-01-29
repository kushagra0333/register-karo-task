import React from "react";
import logo from "../Asset/all-icon.png";
import { FaArrowRight } from "react-icons/fa";

const HappyClients = () => {
  return (
    <div className="bg-white text-center mb-16 px-4 sm:px-8 lg:px-16">
      <div className="font-bold text-4xl py-2 pt-9">Our Happy Clients</div>
      <div className="text-gray-400 text-sm pb-10">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource- <br />
        leveling customer service for state of the art customer service.
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Client Logos"
          className="w-full h-auto object-contain"
        />
      </div>

      <a
        className="flex items-center justify-center text-primary font-semibold px-4 py-2 ml-4 transition hover:text-violet-800 mt-6 sm:mt-8"
        href="/"
      >
        Show more
        <FaArrowRight className="ml-2 text-primary" />
      </a>
    </div>
  );
};

export default HappyClients;
