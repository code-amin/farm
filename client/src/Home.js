const Home = () => {
  return (
<div className="BANNER  pt-20 px-20 drop-shadow-2xl flex flex-col items-center justify-center">
  <img
    className="sm:w-full rounded-lg shadow-2xl max-w-[1000px] object-contain"
    src="https://raw.githubusercontent.com/code-amin/farm/e44f199181acf0c85490be6b467d83bd3bbc25e4/client/src/images/image0.jpeg"
    alt="Descriptive Alt Text"
  />
      
  <a href="/#/home"
    className="DETAILS flex items-center justify-center my-4 px-4 py-2 sm:px-2 sm:py-2 font-medium rounded-lg text-black bg-white border-2 border-black hover:bg-gray-200 whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl">
    Détails
  </a>
</div>

  );
};

export default Home;
 