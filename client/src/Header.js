const Header = () => {
  return (
    <div className="NAVBAR flex top-0 font-[Poppins] bg-[hsl(118,40%,48%)] shadow-lg px-2  justify-between">
      <a href="/">
        <img
          className="FAVICON transition w-10 sm:w-full duration-300 ease-in-out hover:scale-110"
          src="../favicon.ico"
        />
      </a>
      <span className="H1 text-sm md:text-2xl lg:text-3xl font-semibold text-white self-center ">
        Ferme les Ricins
      </span>
      <div className="flex space-x-2 sm:space-x-4 ">
  <a
    href="/#/home"
    className="DETAILS flex items-center justify-center my-2 sm:h-10 sm:w-20 font-medium rounded-lg px-2 sm:px-4 text-white border-2 border-white hover:underline whitespace-nowrap"
  >
    Détails
  </a>
  <a
    href="/#/prix"
    className="CONTACT flex items-center justify-center my-2 sm:h-10 sm:w-20 font-medium rounded-lg px-2 sm:px-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none whitespace-nowrap"
  >
    Info $
  </a>
</div>


    </div>
  );
};

export default Header;
 