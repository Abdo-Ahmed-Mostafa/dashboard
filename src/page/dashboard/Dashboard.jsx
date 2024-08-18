import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [check, setCheck] = useState(false);
  const getAllProduct = () => {
    axios({
      method: "get",
      url: "http://localhost:8000/products",
    }).then((data) => {
      setProduct(data.data);
    });
  };
  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:8000/products/${id}`,
        }).then(() => {
          setCheck(!check);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  useEffect(() => {
    getAllProduct();
  }, [check]);
  return (
    <div>
      <div className="flex justify-center w-full my-10">
        <Link to={"/dashboard/add-product"}>
          <button className="btn bg-green-700 ">create product</button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>id</th>
              <th>image</th>
              <th>Name</th>
              <th>operations</th>
            </tr>
          </thead>
          <tbody>
            {product.map((data, index) => (
              <tr className="text-center font-bold" key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={data.image} />
                    </div>
                  </div>
                </td>
                <td>{data.title}</td>
                <td>
                  <div className=" flex justify-evenly">
                    <Link to={`/dashboard/view/${data.id}`}>
                      <button className="btn btn-primary">View</button>
                    </Link>
                    <Link to={`/dashboard/edit/${data.id}`}>
                      <button className="btn btn-accent">Edit</button>
                    </Link>
                    <button
                      className="btn btn-neutral"
                      onClick={() => deleteProduct(data.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
