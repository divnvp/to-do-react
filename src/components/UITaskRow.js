export function UITaskRow(props) {
  const clicked = () => {
    props.clicked(props.taskId);
  }

  const getColor = () => {
    switch (props.taskStatus){
      case "waiting":
        return {color: "gray"};
      case "process":
        return {color: "blue"};
      case "completed":
        return {color: "lightgreen"};
      default:
        return {color: "black"};
    }
  }

  const getStatus = () => {
    switch (props.taskStatus){
      case "waiting":
        return "Ожидает";
      case "process":
        return "В процессе";
      case "completed":
        return "Выполнена";
      default:
        return "Неизвестно";
    }
  }

  return (
    <section className="task">
      <label className="task__status" style={getColor()}>
        { getStatus() }
      </label>

      <button
        onClick={clicked}
        className="task__button"
      >
        {props.taskName}
      </button>
    </section>
  );
}