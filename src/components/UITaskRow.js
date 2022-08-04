export function UITaskRow(props) {
  /**
   * Функция для проброса наверх нажатия на заметку
   */
  const clicked = () => {
    props.clicked(props.taskId);
  }

  /**
   * @return {CSSProperties | undefined} - Свойство для цвета текста
   */
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

  /**
   * @return {string} - Название статуса по-русски
   */
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

  /**
   * @return {string} - Название заметки с ограниченной длиной
   */
  const getName = () => {
    if (props.taskName.length <= 10) {
      return props.taskName;
    } else {
      return props.taskName.substring(0, 10) + "...";
    }
  }

  return (
    <section className="task">
      <label className="task__status" style={getColor()}>
        {getStatus()}
      </label>

      <button
        onClick={clicked}
        className="task__button"
      >
        {getName()}
      </button>
    </section>
  );
}