import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import Products from "./Views/Products";

export default function App() {
  return (
    <div>
      <h1>Min webbshop</h1>
      <Link to="/">Home</Link>
      <Link to="/products">products</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
