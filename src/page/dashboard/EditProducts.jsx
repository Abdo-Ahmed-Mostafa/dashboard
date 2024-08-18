import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProducts = () => {
  const { productId } = useParams();

  const navigate = useNavigate();
  const [addProduct, setAddProduct] = useState({
    title: "asdasd",
    description: "",
    category: "",
    price: "",
    discount: "",
    image: "",
  });
  const getAllProduct = () => {
    axios({
      method: "get",
      url: `http://localhost:8000/products/${productId}`,
    }).then((data) => {
      setAddProduct({
        title: data.data.title,
        description: data.data.description,
        category: data.data.category,
        price: data.data.price,
        discount: data.data.discount,
        image: data.data.image,
      });
    });
  };
  // console.log(addProduct);
  const addSingleProduct = (e) => {
    e.preventDefault();

    axios({
      method: "patch",
      url: `http://localhost:8000/products/${productId}`,
      data: addProduct,
    }).then(() => {
      console.log("Done");
      navigate("/product");
    });
  };

  useEffect(() => {
    getAllProduct();
  }, [productId]);
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

export default EditProducts;
