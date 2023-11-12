import Header from "./Header";
import Carousel from "./Carousel";
import Prix from "./Prix";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/prix" element={<Prix />} />
      </Routes>
    </>
  );
};

export default App;
