import Header from "./Header";
import Carousel from "./Carousel";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>
    </>
  );
};

export default App;
