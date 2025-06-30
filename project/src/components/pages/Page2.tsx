import React from "react";
import heroImage from "../../assets/page2.png";

const Page2: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white min-h-[calc(100vh-4rem)]">
      <div className="w-full md:w-1/3 h-80 md:h-auto">
        <img
          src={heroImage}
          alt="Woman with a fit torso"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center p-8 md:p-12 lg:p-16">
<div className="w-full max-w-3xl text-center md:text-left">
  <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
    Ready to Burn Belly Fat in 21 Days?
  </h1>

  <p className="text-lg md:text-xl text-gray-600 mb-10">
    Join hundreds who've jump-started their fitness with this
    home-friendly, no-equipment program. Start today and feel the
    difference!
  </p>

  <button className="w-full max-w-md px-8 lg:px-10 py-3 lg:py-4 bg-white border-neutral-800 shadow-[4px_4px_0px_#b590e2] rounded-sm border border-solid font-semibold text-black text-base lg:text-lg tracking-[0] leading-[18px] hover:translate-y-1 hover:!text-white hover:!bg-[#222222] hover:shadow-[2px_2px_0px_#b590e2] transition-all">
    Start My Transformation
  </button>
</div>

      </div>
    </div>
  );
};

export default Page2;
