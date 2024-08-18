import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProducts = () => {
  const { productId } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);
  const getAllProduct = () => {
    axios({
      method: "get",
      url: `http://localhost:8000/products/${productId}`,
    }).then((data) => {
      setSingleProduct(data.data);
    });
  };
  console.log(singleProduct);

  useEffect(() => {
    getAllProduct();
  }, [productId]);
  return (
    <div>
      <img src={singleProduct.image} alt="" />
      <h1>{singleProduct.title}</h1>
    </div>
  );
};

export default ViewProducts;
