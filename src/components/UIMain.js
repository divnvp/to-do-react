import { useEffect, useState } from "react";
// Components
import { UICard } from "./UICard";
import { UIInput } from "./UIInput";
import { UISelect } from "./UISelect";

export function UIMain(props) {
  /**
   * Состояние для значения инпута
   */
  const [ inputValue, setInputValue ] = useState("");
  /**
   * Состояние для значения статуса
   */
  const [ statusValue, setStatusValue ] = useState("");
  /**
   * Состояние для определения, больше ли текущий ИД заметки последнего в заметках
   */
  const [ isCurrentIdMore, setIsCurrentIdMore ] = useState(false);

  /**
   * @type {Array} tasks - Переменная для массивов заметок из локального хранилища
   */
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  /**
   * @type {Object} task - Переменная для выбранной заметки
   */
  let task = tasks.find(task => task.id === props.currentTaskId);

  /**
   * Слежение за значениями имени и статуса выбранной заметки
   */
  useEffect(() => {
    setInputValue(props.currentTaskName || "");
    setStatusValue(props.currentTaskStatus || "");
    
    setIsCurrentIdMore(props.currentTaskId > tasks[tasks.length - 1].id);
  }, [props.currentTaskId, props.currentTaskName, props.currentTaskStatus]);

  /**
   * Функция обновления значения состояния для инпута
   * @param {Event} e - Событие при прослушивании изменения селектора
   */
  const updateInput = (e) => {
    setInputValue(e.target.value);
  }

  /**
   * Функция обновления значения состояния для статуса
   * @param {Event} e - Событие при прослушивании изменения селектора
   */
  const updateStatus = (e) => {
    setStatusValue(e.target.value);
  }

  /**
   * Функция для сохранения изменений в заметке
   */
  const saveChanges = () => {
    props.save({
      id: props.currentTaskId,
      name: inputValue,
      status: statusValue,
      date: props.currentTaskDate
    })
  }

  /**
   * Функция для удаления заметки
   */
  const deleteTask = () => {
    props.delete(props.currentTaskId);
  }

  /**
   * Функция для изменения заметки
   */
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
            {!isCurrentIdMore && <button
              onClick={deleteTask}
              className="main__button_delete"
            >
              Удалить
            </button>}

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