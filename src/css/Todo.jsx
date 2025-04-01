import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>To do</h1>
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{ width: 300, height: 30, fontSize: 20 }}
        />
        <button onClick={addTask} style={{ marginLeft: 10, height: 50, fontSize: 20 }}>
          Add
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
          <h2>Incomplete Tasks</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {tasks.filter(task => !task.completed).map((task, index) => (
              <li
                key={index}
                style={{
                    width: 200,
                    height: 50,
                    fontSize: 20,
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: 'orange',
                  color: 'black'
                }}
                onClick={() => toggleTaskCompletion(index)}
              >
                <span style={{ flexGrow: 1 }}>{task.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ width: "45%" }}>
          <h2>Complete Tasks</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {tasks.filter(task => task.completed).map((task, index) => (
              <li
                key={index}
                style={{
                    width: 200,
                    height: 50,
                    fontSize: 20,
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: 'orange',
                  color: 'black'
                }}
               
              >
                <span style={{ flexGrow: 1 }}>{task.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
