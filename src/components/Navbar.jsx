import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { RiMic2Line } from "react-icons/ri";
import { FcInfo } from "react-icons/fc";
import Modal from "./Modal";

const Navbar = () => {
  const { currentUser, logOut } = useAuthContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="bg-slate-800 flex justify-between items-center px-7 py-4 text-white">
        <div className="flex items-center gap-2">
          <RiMic2Line />
          ToDo
        </div>
        {currentUser ? (
          <div className="flex items-center gap-7">
            <FcInfo
              onClick={() => setShowModal(!showModal)}
              className="text-2xl cursor-pointer"
            />
            <span>{auth?.currentUser?.displayName}</span>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Navbar;
