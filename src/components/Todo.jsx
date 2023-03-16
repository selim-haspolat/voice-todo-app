import { getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { data as database } from "../firebase";
import { MdClose } from "react-icons/md";

const Todo = ({ dbInstance, setUpdate, update }) => {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    let data = await getDocs(dbInstance);
    setTodos(data.docs.map((item) => ({ ...item.data(), id: item.id })));
  };

  const deleteItem = (id) => {
    const data = doc(database, "todo-list", id);
    deleteDoc(data).then(() => {
      getData();
    });
  };

  useEffect(() => {
    getData();
    setUpdate(false);
  }, [update]);

  const sliceUserName = (user) => {
    let a = user?.split(' ')
    if(a.length === 1){
      return a[0]
    }
    else{
      return a[0] + ' ' + a[1]?.slice(0,1)+'.'
    }
    
  }

  return (
    <div className="flex flex-col gap-5 justify-center mt-20">
      {todos.map((todo) => (
        <div key={todo.id} className="flex p-4 py-2 container mx-auto gap-3 w-full justify-between bg-slate-700 text-white rounded hover:bg-slate-600">
          <p>{sliceUserName(todo.user)}</p>
          <h3>{todo.todo}</h3>
          <button
            className="text-red-500 text-2xl"
            onClick={() => deleteItem(todo.id)}
          >
            <MdClose />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
