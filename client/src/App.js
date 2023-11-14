import Header from "./Header";
import Carousel from "./Carousel";
import Prix from "./Prix";
import Photos from "./Photos";
import Modal from "./Modal";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/prix" element={<Prix />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </>
  );
};

export default App;
