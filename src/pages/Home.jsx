import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Todo from "../components/Todo";
import { data } from "./../firebase";
import { useAuthContext } from "../context/AuthContext";
import signinpng from "../assets/Sign-in.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuthContext();

  const dbInstance = collection(data, "todo-list");
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    currentUser &&
      alanBtn({
        key: process.env.REACT_APP_VOICE_KEY,
        onCommand: (commandData) => {
          let todoData = commandData.data;
          addDoc(dbInstance, { todo: todoData, user: currentUser }).then(() => {
            setUpdate(true);
          });
        },
      });
  }, []);

  return (
    <div>
      {currentUser ? (
        <Todo dbInstance={dbInstance} setUpdate={setUpdate} update={update} />
      ) : (
        <div className="md:w-[700px] mx-auto">
          <img src={signinpng} alt="login" />
          <button onClick={() => navigate('/login')} className="flex gap-2 items-center m-auto mt-5 outline outline-1 outline-blue-500 px-5 py-2 rounded text-blue-700 hover:bg-blue-500 hover:text-white transition-colors">
            Login <AiOutlineArrowRight className="text-xl" />{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
