// Components
import { UITaskRow } from "./UITaskRow";

export function UISelect(props) {
  const statuses = [
    { name: "waiting", text: "Ожидает" },
    { name: "process", text: "В процесе" },
    { name: "completed", text: "Сделано" },
  ];
  const options = statuses.map((status, index) =>
    <option key={index} value={status.name}>
      {status.text}
    </option>
  );

  const updateSelect = (e) => {
    props.updateSelect(e);
  }

  return (
    <section className="custom-select">
      <label>{props.label}</label>

      <select value={props.status} onChange={updateSelect}>
        {options}
      </select>
    </section>
  )
}