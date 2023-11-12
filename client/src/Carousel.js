import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import { useState } from "react";
import Body from "./Body";

const Carousel = () => {
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

  return (
    <div className="p-20  justify-center ">
      <div className="max-w-[700px] h-[500px] m::w-[1000px] m:h-[1000px] w-full m-auto py-16 px-4 relative mt-[10px]">
        <h2 className="text-center text-2xl	pb-4 font-medium">
          Ferme Agricole Moderne avec un Potentiel Immense
        </h2>{" "}
        <div
          id="carousel"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover  shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        ></div>
        {/* Left Arrow */}
        <div className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-gray-400/30 ">
          <BsChevronCompactLeft onClick={prevSlide} size={50} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-gray-400/30 ">
          <BsChevronCompactRight onClick={nextSlide} size={50} />
        </div>
        <Body />
      </div>
    </div>
  );
};

export default Carousel;
