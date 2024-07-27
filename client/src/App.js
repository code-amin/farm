import Header from "./Header";
import Home from "./Home";
import Carousel from "./Carousel";
import Prix from "./Prix";
import Photos from "./Photos";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Carousel />} />
        <Route path="/prix" element={<Prix />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
};

export default App;
 