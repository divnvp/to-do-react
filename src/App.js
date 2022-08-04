import './App.scss';
import { useState } from "react";
// Components
import { UIHeader } from "./components/UIHeader";
import { UIMain } from "./components/UIMain";

function App() {
  /**
   * Состояние массива заметок и функция для его изменения
   */
  const [ tasks, setTasks ] = useState(JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, name: "Сделать что-то", status: "waiting", date: new Date() },
    { id: 2, name: "Делаю что-то", status: "process", date: new Date() },
    { id: 3, name: "Сделал что-то", status: "completed", date: new Date() },
  ]);
  /**
   * Состояние ИД текущей заметки и функция для его изменения
   */
  const [ currentTaskId, setCurrentTaskId ] = useState(-1);
  /**
   * Состояние названия текущей заметки и функция для его изменения
   */
  const [ currentTaskName, setCurrentTaskName ] = useState("");
  /**
   * Состояние статуса текущей заметки и функция для его изменения
   */
  const [ currentTaskStatus, setCurrentTaskStatus ] = useState("");
  /**
   * Состояние даты текущей заметки и функция для её изменения
   */
  const [ currentTaskDate, setCurrentTaskDate ] = useState(null);

  /**
   * Функция для получения массива заметок из локального хранилища
   */
  const setTasksItem = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  setTasksItem();

  /**
   * Функция для выбора текущей заметки
   * @param {number} taskId - Значение ИД выбранной заметки
   */
  const selectItem = (taskId) => {
    let task = tasks.find(task => task.id === taskId);

    setCurrentTaskId(task.id);
    setCurrentTaskName(task.name);
    setCurrentTaskStatus(task.status);
    setCurrentTaskDate(task.date);
  }
  /**
   * Функция для сохранения текущей заметки
   * @param {Object} newTask - Объект для хранения текущей изменённой заметки
   * @param {number} newTask.id - ИД заметки
   * @param {string} newTask.name - Название заметки
   * @param {string} newTask.status - Статус заметки
   * @param {Date} newTask.date - Дата заметки
   */
  const saveTask = (newTask) => {
    if (tasks.find(task => task.id === newTask.id)) {
      const index = tasks.findIndex(t => t.id === newTask.id);
      tasks.splice(index, 1);
    }

    if (newTask.name.length > 1) {
      tasks.push(newTask);

      setTasks(tasks);
      setTasksItem();
      window.location.reload();
    }
  }
  /**
   * Функция для сохранения новой заметки
   */
  const createTask = () => {
    setCurrentTaskId(tasks[tasks.length - 1].id + 1);
    setCurrentTaskName(" ");
    setCurrentTaskStatus("waiting");
    setCurrentTaskDate(new Date());
  }
  /**
   * Функция для удаления выбранной заметки
   * @param {number} taskId - ИД выбранной заметки
   */
  const deleteTask = (taskId) => {
    const index = tasks.findIndex(t => t.id === taskId);
    tasks.splice(index, 1);

    setTasksItem();
    window.location.reload();
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
              delete={deleteTask}
            />
          }
        </main>
      </div>
    </div>
  );
}

export default App;
