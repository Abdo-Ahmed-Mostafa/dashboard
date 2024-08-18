import React from "react";
import NavBar from "./component/navBar/NavBar";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./page/products/Products";
import Dashboard from "./page/dashboard/Dashboard";
import AddProducts from "./page/dashboard/AddProducts";
import EditProducts from "./page/dashboard/EditProducts";
import ViewProducts from "./page/dashboard/ViewProducts";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-product" element={<AddProducts />} />
        <Route path="/dashboard/edit/:productId" element={<EditProducts />} />
        <Route path="/dashboard/view/:productId" element={<ViewProducts />} />
      </Routes>
    </div>
  );
};

export default App;
