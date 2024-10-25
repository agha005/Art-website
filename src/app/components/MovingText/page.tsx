import React from "react";

const MovingText = () => {
  return (
    <div id="page2" className="bg-[#272727] bg-opacity-85 py-16 font-semi">
      <div id="moving-text" className="flex items-center">
        <div className="moving-con text-white">
          <h1 className="inline-block lg:text-6xl text-4xl">ARTISTIC</h1>
          <div className="gola inline-block mx-4 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] bg-[#6cd6d1] rounded-full"></div>
          <h1 className="inline-block lg:text-6xl text-4xl">CREATIONS</h1>
          <div className="gola inline-block mx-4 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] bg-[#6cd6d1] rounded-full"></div>
          <h1 className="inline-block lg:text-6xl text-4xl">IMAGINATION</h1>
          <div className="gola inline-block mx-4 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] bg-[#6cd6d1] rounded-full"></div>
        </div>
        {/* Duplicate the moving-con for continuous flow */}
        <div className="moving-con text-white font-semi">
          <h1 className="inline-block lg:text-6xl text-4xl">ARTISTIC</h1>
          <div className="gola inline-block mx-4 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] bg-[#6cd6d1] rounded-full"></div>
          <h1 className="inline-block lg:text-6xl text-4xl">CREATIONS</h1>
          <div className="gola inline-block mx-4 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] bg-[#6cd6d1] rounded-full"></div>
          <h1 className="inline-block lg:text-6xl text-4xl">IMAGINATION</h1>
          <div className="gola inline-block mx-4 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] bg-[#6cd6d1] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
