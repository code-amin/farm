import {GiFarmTractor} from "react-icons/gi";

const Header = () => {
    return (
        <div className="border-b-2 w-full top-0 fixed flex font-[Poppins] ">
            <div className="pr-2 py-6 text-3xl border-red-600 border-2 w-4/5 flex">
                <span> Ferme les Ricins </span>
                <span className="pl-2 text-green-800 text-4xl"></span>
                {/*<span className="text-sm pr-2"> | Photos</span>*/}
                {/*<span className="text-sm pr-2"> | Contact</span>*/}
                {/*<span className="text-sm pr-2"> | Info</span>*/}
            </div>

            <div className="border-green-600 border-4 w-1/5 ">
                {/*<button*/}
                {/*    className=" text-white py-3 right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 text-center mr-6 mb-6">*/}
                {/*    Contactez*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default Header;
