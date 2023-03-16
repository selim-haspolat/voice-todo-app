import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div
      className={`modal ${
        showModal || "hidden"
      } h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50`}
    >
      {/* modal */}
      <div className="bg-white rounded shadow-lg w-10/12 md:w-2/3 lg:w-1/2">
        {/* modal header */}
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">How to Use</h3>
          <button
            className="text-black close-modal"
            onClick={() => setShowModal(false)}
          >
            ✗
          </button>
        </div>
        {/* modal body */}
        <div className="p-3">
          It is easy to use <br />
          First of all, you should sign in to use<br />
          Then there is a button look like a microphone appear on your screen <br />
          You can click on the button and say the magical word <br />
          Say <span className="text-blue-300">'Add'</span> and say something
        </div>
        <div className="flex justify-end items-center w-100 border-t p-3">
          <button
            onClick={() => setShowModal(false)}
            className="bg-blue-600 hover:bg-blue-700 px-10 py-1 rounded text-white"
          >
            Oke
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
