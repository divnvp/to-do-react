import { UICard } from "./UICard";
import { UITaskRow } from "./UITaskRow";
// Icons
import calendar from "../pictures/calendar.png"

export function UIHeader(props) {
  /**
   * Функция для проброса наверх события выбора заметки
   * @param {number} taskId - Значение ИД заметки
   */
  const clicked = (taskId) => {
    props.select(taskId);
  }

  /**
   * Функция для проброса наверх события создания заметки
   */
  const createNewTask = () => {
    props.create();
  }

  /**
   * @type {Array} listItems - Переменная для массива компонентов заметок
   */
  const listItems = props.tasks.map((task) =>
    <UITaskRow
      key={task.id}
      taskId={task.id}
      taskName={task.name}
      taskStatus={task.status}
      clicked={clicked}
    />
  );

  return (
    <div className="nav">
      <div className="nav-row">
        <img src={calendar} alt="calendar" className="nav-img" />
        <span className="nav-title">Список</span>
      </div>

      <UICard>
        <section className="nav-row">
          <button
            onClick={createNewTask}
            className="button_rounded"
          >
            +
          </button>
        </section>

        <nav className="nav__panel">
          <div className="nav__panel_items">{listItems}</div>
        </nav>
      </UICard>
    </div>
  );
}