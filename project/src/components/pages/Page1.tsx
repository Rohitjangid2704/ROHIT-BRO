import React, { useState, useEffect } from "react";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.png";

const Page1: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      if (window.innerWidth > 500) {
        setShowFullText(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const descriptionText = "The 21-Day Belly Fat Loss Program is designed to help you build momentum, burn stubborn fat, and strengthen your core - all from the comfort of your home. This DIY program combines simple, effective workouts with smart movement progressions and lifestyle tips to help you see and feel results in just three weeks. Whether you're just starting out or getting back on track, this plan is structured to fit into your daily routine without the need for equipment or gym access. You'll get access to guided routines, a workout calendar, and nutrition suggestions to support your journey every step of the way.";

  return (
    <div className="bg-[#F8F7FA] py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-start font-[Source_Sans_Pro]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            More Details
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know to get started.
          </p>
        </div>

        {/* Image Grid - Desktop */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 h-[400px]">
          <div className="overflow-hidden rounded-lg">
            <img
              src={image1}
              alt="Pink dumbbells and fitness gear"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={image2}
              alt="Purple kettlebell"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={image3}
              alt="Treadmills in a gym"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={image4}
              alt="Rack of dumbbells"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Image Scroll - Mobile */}
        <div className="sm:hidden mb-8 relative">
          <div className="flex overflow-x-auto pb-4 space-x-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex-shrink-0 w-[85%] rounded-lg overflow-hidden">
              <img
                src={image1}
                alt="Pink dumbbells and fitness gear"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[85%] rounded-lg overflow-hidden">
              <img
                src={image2}
                alt="Purple kettlebell"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[85%] rounded-lg overflow-hidden">
              <img
                src={image3}
                alt="Treadmills in a gym"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[85%] rounded-lg overflow-hidden">
              <img
                src={image4}
                alt="Rack of dumbbells"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative">
            <p className={`text-base md:text-lg text-gray-700 leading-relaxed font-[Source_Sans_Pro] ${
              isMobile && !showFullText ? 'line-clamp-3' : ''
            }`}>
              {descriptionText}
            </p>
            {isMobile && (
              <button 
                onClick={toggleText}
                className="mt-4 w-full max-w-[350px] py-3 px-6 bg-white border border-gray-800 shadow-[3px_3px_0_#b590e2] rounded-sm font-semibold text-black text-sm transition-all duration-200 ease-in-out cursor-pointer hover:translate-y-0.5 hover:text-white hover:bg-gray-800 hover:shadow-[1px_1px_0_#b590e2] mx-auto block font-[Source_Sans_Pro]"
              >
                {showFullText ? 'View Less' : 'View More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
