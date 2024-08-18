import React from "react";
import firstImage from "../../assets/Mask Group.png";
import firstImage2 from "../../assets/Mask Group (1).png";
import firstImage3 from "../../assets/Mask Group (2).png";
const SecondSectionHome = () => {
  return (
    <div className="mt-10 flex justify-center gap-8">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="shadow-lg w-16 h-16 flex justify-center items-center">
          <img src={firstImage} className="w-12 h-12" alt="" />
        </div>
        <span className="text-lg font-bold">Free Delivery</span>
        <span>For all orders above $35</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="shadow-lg w-16 h-16 flex justify-center items-center">
          <img src={firstImage2} className="w-12 h-12" alt="" />
        </div>
        <span className="text-lg font-bold">Secure Payment</span>
        <span>100% Secure payment methods</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="shadow-lg w-16 h-16 flex justify-center items-center">
          <img src={firstImage3} className="w-12 h-12" alt="" />
        </div>
        <span className="text-lg font-bold">24/7 Support</span>
        <span>We have dedicated Support</span>
      </div>
    </div>
  );
};

export default SecondSectionHome;
