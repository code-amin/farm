import Footer from "./Footer";
import Header from "./Header";
import Carousel from "./Carousel";
import Test from "./Test";
const { REACT_EMAIL } = process.env;
const App = () => {
  return (
    <div className="">
      <Header />
      <Carousel />
      <Test email={REACT_EMAIL} />
      <hr></hr>
      <Footer />
    </div>
  );
};

export default App;
