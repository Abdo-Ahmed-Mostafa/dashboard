import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  const getAllProduct = () => {
    axios({
      method: "get",
      url: "http://localhost:8000/products",
    }).then((data) => {
      setProduct(data.data);
    });
  };
  console.log(product);

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="flex justify-center gap-5 flex-wrap my-10">
      {product.map((data, index) => (
        <div key={index} className="card bg-gray-200 w-[20%] shadow-xl">
          <img src={data.image} alt="Shoes" className="m-3" />
          <div className="card-body p-0 px-3">
            <p className="text-xl font-bold text-center">{data.title}</p>
            <p>{data.description}</p>
            <div className="flex justify-evenly items-center mx-5 gap-3">
              <span className="text-[#9E3040] font-bold ">${data.price}</span>
              <p className="text-[13px] line-through font-bold">
                ${data.discount}
              </p>
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
  );
};

export default Products;
