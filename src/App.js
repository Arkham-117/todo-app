import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import Help from "./components/Help/Help"
import Change from "./components/Help/Change"
import Adding from "./components/Help/Adding"
import Remove from "./components/Help/Remove"
import { Route, Routes, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, updateDoc, deleteDoc, getDocs, onSnapshot, getDoc, addDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBJSK0GRkOir7gvmBuJoKzjdPUoOh_C_WI",
  authDomain: "jslab6-c92a5.firebaseapp.com",
  projectId: "jslab6-c92a5",
  storageBucket: "jslab6-c92a5.appspot.com",
  messagingSenderId: "679213366695",
  appId: "1:679213366695:web:b27f17df71bc6071f38a82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {
  // Sets the initial state.

  //Hardcoded tasks are an empty array
  const [tasks, setTasks] = useState([

  ]);

  // Removes all tasks form the list.
  const handleClearTasks = async () => {
    const tasksRef = collection(db, "tasks");
    const querySnapshot = await getDocs(tasksRef);
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
    setTasks([]);
  };

  // Toggles a task status.
  const handleStatusChange = async (id) => {
    const taskRef = doc(db, "tasks", id);
    const taskSnapshot = await getDoc(taskRef);
    if (taskSnapshot.exists()) {
      const taskData = taskSnapshot.data();
      const updatedTask = { ...taskData, done: !taskData.done };
      await updateDoc(taskRef, updatedTask);
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
      setTasks(updatedTasks);
    }
  };

  // Removes a task from the list.
  const handleTaskRemove = async (id) => {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Adds a task.
  //Task id is the same as firebase id
  const handleAddTask = async (description, status) => {
    const tasksRef = collection(db, "tasks");
    const newTaskRef = doc(tasksRef);
    const newTask = {
      id: newTaskRef.id,
      description: description,
      done: status
    };
    await setDoc(newTaskRef, newTask);
    setTasks([...tasks, newTask]);
  };
    

  useEffect(() => {
    const tasksRef = collection(db, "tasks");
    getDocs(tasksRef)
      .then((querySnapshot) => {
        const fetchedTasks = [];
        querySnapshot.forEach((doc) => {
          fetchedTasks.push({ id: doc.id, ...doc.data() });
        });
        setTasks(fetchedTasks);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tasks
            tasks={tasks}
            onStatusChange={handleStatusChange}
            onTaskRemove={handleTaskRemove}
            onClearTasks={handleClearTasks}
          />}
        />
        <Route path="/add" element={<Form
            onAddTask={handleAddTask}
          />}
        />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/change" element={<Change />} />
        <Route path="/adding" element={<Adding />} />
        <Route path="/remove" element={<Remove />} />
      </Routes>
    </>
  );
}





function NotFound() {
  return (
    <>
      <h2>Page not found</h2>
      <p>The requested page was not found.</p>
    </>
  );
}
export default App;
