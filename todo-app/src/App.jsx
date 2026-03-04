import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import "./App.css";

function App() {

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [type, setType] = useState("task");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addItem = () => {
    if (!text.trim()) return;

    const newItem = {
      id: Date.now(),
      text,
      type,
      completed: false
    };

    setItems([...items, newItem]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="app">

      <header className="header">
        <h2>To-do List</h2>
        <div className="datetime">
          {time.toLocaleDateString()} | {time.toLocaleTimeString()}
        </div>
      </header>

      <div className="layout">

        <div className="left-panel">

          <h3>Create</h3>

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="task">Task</option>
            <option value="bulletin">Bulletin</option>
            <option value="note">Note</option>
            <option value="reminder">Reminder</option>
          </select>

          <textarea
            placeholder="Write something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={addItem}>Add</button>

        </div>

        <div className="right-panel">

          {items.map(item => (
            <TaskCard
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              toggleComplete={toggleComplete}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;