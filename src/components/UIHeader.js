import { UICard } from "./UICard";
import { UITaskRow } from "./UITaskRow";
// Icons
import calendar from "../pictures/calendar.png"

export function UIHeader(props) {
  const clicked = (taskId) => {
    props.select(taskId);
  }

  const createNewTask = () => {
    props.create();
  }

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
          <div>{listItems}</div>
        </nav>
      </UICard>
    </div>
  );
}