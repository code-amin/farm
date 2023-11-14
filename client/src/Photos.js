const Photos = () => {
  let imagesURL = [];
  for (let x = 1; x < 24; x++) {
    imagesURL.push(
      <img
        src={`https://raw.githubusercontent.com/code-amin/farm/main/client/src/images/image${x}.jpeg`}
        className="py-2 "
      />,
      <hr />
    );
  }

  let videosURL = [];
  for (let y = 1; y < 6; y++) {
    videosURL.push(
      <video width="750" height="500" className="py-2" controls>
        <source
          src={`https://raw.githubusercontent.com/code-amin/farm/main/client/src/videos/vid${y}.mov`}
          type="video/mp4"
        />
      </video>,
      <hr />
    );
  }
  return (
    <>
      <div className="p-10 grid ">
        {" "}
        <p className="text-3xl">Photos</p>
        <hr></hr>
        <a
          href="/"
          className="border-gray-500 w-[100px] 	border-2 py-3 right-0 font-medium text-sm justify-center flex  mr-6 mt-16 transition duration-300 ease-in-out hover:scale-110"
        >
          ⏎ Retour{" "}
        </a>
        <p>
          {imagesURL}
          {videosURL}
        </p>
        <a
          href="/"
          className="border-gray-500 w-[100px] 	border-2 py-3 right-0 font-medium text-sm justify-center flex  mr-6 mt-16 transition duration-300 ease-in-out hover:scale-110"
        >
          ⏎ Retour{" "}
        </a>
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
