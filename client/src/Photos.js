const Photos = () => {
  return (
    <>
      <div className="p-40  grid ">
        <button className="border-gray-500 w-[100px] 	border-2 py-3 right-0 font-medium text-sm px-5 mr-6 mt-16 transition duration-300 ease-in-out hover:scale-110">
          <a href="/">⏎ Retour </a>
        </button>
        <p className="text-3xl">Photos</p>
        <hr></hr>
        <div>content ehre</div>
        <hr></hr>

        <button className="transition duration-300 ease-in-out hover:scale-110 contact text-center  text-white py-3 right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium text-sm px-5 mr-6 mt-16 ">
          <a href="mailto:rouif401@gmail.com?subject=Demande d'information - Ferme">
            Communiquez avec nous
          </a>
        </button>
      </div>
    </>
  );
};

export default Photos;
