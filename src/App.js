import './App.scss';
import { useState } from "react";
// Components
import { UIHeader } from "./components/UIHeader";
import { UIMain } from "./components/UIMain";

function App() {
  const [ tasks, setTasks ] = useState(JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, name: "Сделать что-то", status: "waiting", date: new Date() },
    { id: 2, name: "Делаю что-то", status: "process", date: new Date() },
    { id: 3, name: "Сделал что-то", status: "completed", date: new Date() },
  ]);
  const [ currentTaskId, setCurrentTaskId ] = useState(-1);
  const [ currentTaskName, setCurrentTaskName ] = useState("");
  const [ currentTaskStatus, setCurrentTaskStatus ] = useState("");
  const [ currentTaskDate, setCurrentTaskDate ] = useState(null);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  const selectItem = (taskId) => {
    let task = tasks.find(task => task.id === taskId);

    setCurrentTaskId(task.id);
    setCurrentTaskName(task.name);
    setCurrentTaskStatus(task.status);
    setCurrentTaskDate(task.date);
  }

  const saveTask = (newTask) => {
    if (tasks.find(task => task.id === newTask.id)) {
      const index = tasks.findIndex(t => t.id === newTask.id);
      tasks.splice(index, 1);
    }

    tasks.push(newTask);

    setTasks(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload();
  }

  const createTask = () => {
    setCurrentTaskId(tasks.length + 2);
    setCurrentTaskName(" ");
    setCurrentTaskStatus("waiting");
    setCurrentTaskDate(new Date());
  }

  return (
    <div>
      <div className="app">
        <header className="app-header">
          <UIHeader
            tasks={tasks}
            select={selectItem}
            create={createTask}
          />
        </header>

        <main className="app-main">
          {(currentTaskName && currentTaskStatus && currentTaskDate) &&
            <UIMain
              currentTaskId={currentTaskId}
              currentTaskName={currentTaskName}
              currentTaskStatus={currentTaskStatus}
              currentTaskDate={currentTaskDate}
              save={saveTask}
            />
          }
        </main>
      </div>
    </div>
  );
}

export default App;
