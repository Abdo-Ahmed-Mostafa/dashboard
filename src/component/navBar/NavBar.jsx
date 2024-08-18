import React from "react";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex">
        <span className="btn btn-ghost text-xl">CONCETTI DI-LUSSO</span>
      </div>
      <div className="flex justify-center w-full gap-5 font-bold">
        <span className="cursor-pointer">
          <Link to={"/"}>Home</Link>
        </span>
        <span className="cursor-pointer">
          <Link to={"/product"}>products</Link>
        </span>
        <span className="cursor-pointer">
        <Link to={"/dashboard"}>Dashboard</Link>

        </span>
      </div>
      <div className="flex justify-center me-5 gap-5 font-bold">
        <span className="shadow p-2  rounded-lg ">
          <CiSearch className=" text-2xl font-bold  " />
        </span>
        <span className="shadow p-2  rounded-lg ">
          <CiHeart className=" text-2xl font-bold  " />
        </span>
        <span className="shadow p-2  rounded-lg ">
          <CiShoppingCart className=" text-2xl font-bold  " />
        </span>

        <button className="btn bg-[#9E3040] text-white hover:bg-black font-bold">
          SING IN
        </button>
      </div>
    </div>
  );
};

export default NavBar;
