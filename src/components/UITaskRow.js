import { UIIcon } from "./UIIcon";

export function UITaskRow(props) {
  const clicked = () => {
    props.clicked(props.taskId);
  }

  return (
    <section className="task">
      <UIIcon status={props.taskStatus} />

      <button onClick={clicked} className="task__button">
        {props.taskName}
      </button>
    </section>
  );
}