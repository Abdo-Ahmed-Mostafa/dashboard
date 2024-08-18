import React from "react";
import imageCard from "../../assets/cart.png";
const ThirdSection = () => {
  const result = [
    {
      id: 1,
      title: "Bag",
      description:
        "Concetti Di-Lusso ALESANDRDO LuxuryTurkish Spa Towels and ganic Bamboo Robes 12 PC set",
      price: 199,
      discount: 150,
      image: imageCard,
    },
    {
      id: 2,
      title: "Bag",
      description:
        "Concetti Di-Lusso ALESANDRDO LuxuryTurkish Spa Towels and ganic Bamboo Robes 12 PC set",
      price: 199,
      discount: 111,
      image: imageCard,
    },
    {
      id: 3,
      title: "Bag",
      description:
        "Concetti Di-Lusso ALESANDRDO LuxuryTurkish Spa Towels and ganic Bamboo Robes 12 PC set",
      price: 199,
      discount: 111,
      image: imageCard,
    },
    {
      id: 4,
      title: "Bag",
      description:
        "Concetti Di-Lusso ALESANDRDO LuxuryTurkish Spa Towels and ganic Bamboo Robes 12 PC set",
      price: 199,
      discount: 111,
      image: imageCard,
    },
  ];
  return (
    <div className=" container mx-auto flex flex-col gap-7">
      <h1 className="text-3xl font-bold text-center my-10">Featured Product</h1>
      <div>
        <div className="flex  mx-10 ">
          <div className="bg-explorer  rounded-2xl w-[30%] object-cover bg-cover me-3 ">
            <div className="h-[65%] flex flex-col gap-3 items-center justify-center   ">
              <span className="text-white text-4xl font-bold">
                Explore More
              </span>
              <span className="text-white text-4xl font-bold">Product</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-[70%] gap-5  ">
            {result.map((data, index) => (
              <div key={index} className="card bg-gray-200 w-[40%] shadow-xl">
                <img src={imageCard} alt="Shoes" className="m-3" />
                <div className="card-body p-0 px-3">
                  <p className="text-xl font-bold text-center">{data.title}</p>
                  <p>{data.description}</p>
                  <div className="flex justify-evenly items-center mx-5 gap-3">
                    <span className="text-[#9E3040] font-bold ">
                      ${data.price}
                    </span>
                    <p className="text-[13px] line-through font-bold">${data.discount}</p>
                    <div className="card-actions  py-3">
                      <button className=" bg-black px-8 rounded-lg text-white py-1">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
