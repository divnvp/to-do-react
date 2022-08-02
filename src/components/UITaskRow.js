import { UIIcon } from "./UIIcon";

export function UITaskRow(props) {
  return (
    <section className="task">
      <UIIcon status={props.taskStatus} />
      {props.taskName}
    </section>
  );
}