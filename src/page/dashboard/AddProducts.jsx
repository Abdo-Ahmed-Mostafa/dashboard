import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  const [addProduct, setAddProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discount: "",
    image: "",
  });
  // console.log(addProduct);
  const addSingleProduct = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/products",
      data: addProduct,
    }).then(() => {
      console.log("Done");
      navigate("/product");
    });
  };

  return (
    <div className=" w-full text-center">
      <form className="flex flex-col items-center gap-7 mt-8">
        <input
          type="text"
          value={addProduct.title}
          onChange={(e) =>
            setAddProduct({ ...addProduct, title: e.target.value })
          }
          placeholder="title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          value={addProduct.description}
          onChange={(e) =>
            setAddProduct({ ...addProduct, description: e.target.value })
          }
          placeholder="description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          value={addProduct.category}
          onChange={(e) =>
            setAddProduct({ ...addProduct, category: e.target.value })
          }
          placeholder="category"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          value={addProduct.price}
          onChange={(e) =>
            setAddProduct({ ...addProduct, price: e.target.value })
          }
          placeholder="price"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          value={addProduct.discount}
          onChange={(e) =>
            setAddProduct({ ...addProduct, discount: e.target.value })
          }
          placeholder="discount"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          value={addProduct.image}
          onChange={(e) =>
            setAddProduct({ ...addProduct, image: e.target.value })
          }
          placeholder="image"
          className="input input-bordered w-full max-w-xs"
        />
      </form>
      <button onClick={addSingleProduct} className="btn btn-success my-5">
        Send
      </button>
    </div>
  );
};

export default AddProducts;
