const Header = () => {
  return (
    <div className="NAVBAR flex top-0 font-[Poppins] bg-[rgb(77,172,73)] shadow-lg px-2 text-sm lg:text-3xl md:text-2xl  justify-between">
      <a href="/">
        <img
          className="FAVICON transition w-10 sm:w-full duration-300 ease-in-out hover:scale-110"
          src="../favicon.ico"
        />
      </a>
      <span className="H1 text-sm md:text-2xl lg:text-3xl font-semibold text-white self-center ">
        Ferme les Ricins
      </span>
      <a
        href="/#/prix"
        className="CONTACT text-center self-center h-7 w-12 font-medium rounded-lg md:px-5 md:mr-6 md:my-3 md:pt-2 md:text-xl
        text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none"
      >
        Info $
      </a>
    </div>
  );
};

export default Header;
