const Header = () => {
  return (
    <div className="HEADER flex bo w-full top-0 fixed font-[Poppins] bg-green-700 z-50 shadow-lg px-2 pr-2 py-6 text-3xl justify-between">
      <img className="wh-[25px]" src="../favicon.ico" />
      <span className="text-white self-center ">Ferme les Ricins</span>
      <button className="contact text-center  text-white py-3 right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 mr-6 mb-6 ">
        Info $
      </button>
    </div>
  );
};

export default Header;
