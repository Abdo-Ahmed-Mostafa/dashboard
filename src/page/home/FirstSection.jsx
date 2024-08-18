import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FirstSection = () => {
  return (
    <div className=" bg-home h-screen bg-cover text-white  w-full flex items-center ">
      <div className="w-[30%] flex flex-col gap-5 ms-5">
        <h1 className="text-5xl font-bold">Beautiful Color</h1>
        <h1 className="text-5xl font-bold">Contrast!</h1>
        <h3>Over 50 Collections to Choose for !</h3>
        <button className="btn bg-white text-red-800 px-8 max-w-40 py-0">
          Shop now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
