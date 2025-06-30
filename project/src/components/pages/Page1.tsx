// src/components/Page1.tsx

import React from "react";

// TODO: Make sure these paths match your assets folder
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.png";

const Page1: React.FC = () => {
  return (
    <div className="bg-[#F8F7FA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            More Details
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know to get started.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          <div className="overflow-hidden">
            <img
              src={image1}
              alt="Pink dumbbells and fitness gear"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={image2}
              alt="Purple kettlebell"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={image3}
              alt="Treadmills in a gym"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={image4}
              alt="Rack of dumbbells"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            The 21-Day Belly Fat Loss Program is designed to help you build
            momentum, burn stubborn fat, and strengthen your core - all from the
            comfort of your home. This DIY program combines simple, effective
            workouts with smart movement progressions and lifestyle tips to help
            you see and feel results in just three weeks. Whether you're just
            starting out or getting back on track, this plan is structured to
            fit into your daily routine without the need for equipment or gym
            access. You'll get access to guided routines, a workout calendar,
            and nutrition suggestions to support your journey every step of the
            way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
