import { useEffect, useState } from "react";
// Components
import { UICard } from "./UICard";
import { UIInput } from "./UIInput";
import { UISelect } from "./UISelect";

export function UIMain(props) {
  const [ inputValue, setInputValue ] = useState("");
  const [ statusValue, setStatusValue ] = useState("");

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let task = tasks.find(task => task.id === props.currentTaskId);

  useEffect(() => {
    setInputValue(props.currentTaskName || "");
    setStatusValue(props.currentTaskStatus || "");
  }, [props.currentTaskName, props.currentTaskStatus]);

  const updateInput = (e) => {
    setInputValue(e.target.value);
  }

  const updateStatus = (e) => {
    setStatusValue(e.target.value);
  }

  const saveChanges = () => {
    props.save({
      id: props.currentTaskId,
      name: inputValue,
      status: statusValue,
      date: props.currentTaskDate
    })
  }

  const deleteTask = () => {
    props.delete(props.currentTaskId);
  }

  const cancelChanges = () => {
    setInputValue(task.name);
    setStatusValue(task.status);
  }

  return (
    <section className="main">
      <span>Редактирование</span>

      <UICard>
        <section className="main__editing">
          <UIInput
            label="Название"
            inputValue={inputValue}
            placeholder="Введите название задачи"
            updateInput={updateInput}
          />

          <UISelect
            label="Статус"
            status={statusValue}
            updateSelect={updateStatus}
          />

          <UIInput
            label="Дата создания"
            inputValue={new Date(props.currentTaskDate).toLocaleDateString()}
            disabled={true}
          />

          <section className="main__button">
            <button
              onClick={deleteTask}
              className="main__button_delete"
            >
              Удалить
            </button>

            <button
              onClick={cancelChanges}
              className="main__button_cancel"
            >
              Отменить
            </button>

            <button
              onClick={saveChanges}
              className="main__button_save"
            >
              Сохранить
            </button>
          </section>
        </section>
      </UICard>
    </section>
  )
}