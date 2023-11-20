const Modal = ({ img }) => {
  return (
    <div className="fixed z-10 left-0 object-cover top-40 w-full h-full  align-center justify-center  bg-opacity-25 bg-black">
      <p
        className="Modalradius-xl p-2 w-full object-cover h-full"
        style={{ backgroundImage: `url(${img})` }}
      ></p>
    </div>
  );
};

export default Modal;
 