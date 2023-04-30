const Header = () => {
    return (
        <div className="border-b-2 w-full top-0 fixed flex font-[Poppins]">
            <div className="text-center py-6 text-3xl  border-solid border-2 border-red-300">Ferme Les Ricins</div>
            <div>
                <button
                    className="border-solid border-2 border-red-300 text-white fixed py-3 right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 text-center mr-6 mb-6">
                    Contactez
                </button>
            </div>
        </div>
    );
};

export default Header;
