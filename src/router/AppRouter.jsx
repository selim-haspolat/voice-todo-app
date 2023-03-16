import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./../pages/Home";
import Login from "../pages/Login";

const AppRouter = ({currentUser,setCurrentUser}) => {
  return (
    <>
      <Navbar currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Home setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
      </Routes>
    </>
  );
};

export default AppRouter;
