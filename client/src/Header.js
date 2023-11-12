const Header = () => {
  return (
    <div className="HEADER flex w-full top-0 fixed font-[Poppins] bg-[rgb(77,172,73)] z-50 shadow-lg px-2 pr-2 py-6 text-3xl justify-between">
      <img className="wh-[25px]" src="../favicon.ico" />
      <span className="text-5xl font-semibold text-white self-center ">
        Ferme les Ricins
      </span>
      <a
        href="/#/prix"
        className="contact text-center text-white right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg px-5 mr-6 my-3 pt-2 first-line:text-xl "
      >
        Info $
      </a>
    </div>
  );
};

export default Header;
