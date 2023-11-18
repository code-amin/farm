import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import { useState } from "react";
import Body from "./Body";
import Modal from "./Modal";

const Carousel = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const link = [
    "https://raw.githubusercontent.com/code-amin/farm/main/client/src/images/",
  ];

  const links = [];
  for (let x = 1; x < 24; x++) {
    const theURL = `${link}${"image" + x + ".jpeg"}`;
    links.push({ url: `${theURL}` });
  }

  let slides = [];
  links.forEach((link) => {
    slides.push(link);
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  let img = slides[currentIndex].url;

  return (
    <div className="sm:p-5 justify-center ">
      <h2 className="text-[rgb(5,69,47)] text-center text-lg sm:text-3xl sm:pb-2 font-medium pt-2">
        Ferme agricole moderne avec un potentiel immense
      </h2>{" "}
      <div className="w-full h-[300px] sm:w-[700px] sm:h-[500px] px-2 m-auto sm:py-10  relative mt-[10px]">
        <a
          href="/#/photos"
          className="text-lg sm:text-2xl  text-blue-700 underline text-right  justify-end flex"
        >
          Voir tout 📸{" "}
        </a>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="CAROUSEL w-full h-full rounded-2xl bg-center bg-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          alt="Photo de la ferme"
        >
          {" "}
          {/* {modalOpen && <Modal img={img}>hhh</Modal>} */}
        </button>
        {/* Left Arrow */}
        <div className="ARROWS flex absolute top-[40%] w-full left-0 justify-between sm:top-[50%] text-white  ">
          <div className="   rounded-full  bg-black/30 cursor-pointer hover:bg-gray-400/30 ">
            <BsChevronCompactLeft onClick={prevSlide} size={50} />
          </div>
          {/* Right Arrow */}
          <div className="  rounded-full bg-black/30 cursor-pointer hover:bg-gray-400/30 ">
            <BsChevronCompactRight onClick={nextSlide} size={50} />
          </div>
        </div>
        <Body />
      </div>
    </div>
  );
};

export default Carousel;
