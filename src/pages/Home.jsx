import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Todo from "../components/Todo";
import { data } from "./../firebase";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useAuthContext();

  const dbInstance = collection(data, "todo-list");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    currentUser &&
      alanBtn({
        key: process.env.REACT_APP_VOICE_KEY,
        onCommand: (commandData) => {
          let todoData = commandData.data;
          addDoc(dbInstance, { todo: todoData, user:currentUser }).then(() => {
            setUpdate(true);
          });
        },
      });
  }, []);

  return (
    <div>
      {currentUser && (
        <Todo dbInstance={dbInstance} setUpdate={setUpdate} update={update} />
      )}
    </div>
  );
};

export default Home;
