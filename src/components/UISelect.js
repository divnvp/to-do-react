export function UISelect(props) {
  /**
   * Переменная для определения существующих статусов
   * @type {Array} statuses
   */
  const statuses = [
    { name: "waiting", text: "Ожидает" },
    { name: "process", text: "В процесе" },
    { name: "completed", text: "Выполнена" },
  ];
  /**
   * Создание нового массива на основе statuses с применением
   * на каждой итерации JSX
   * @type {Array} options
   */
  const options = statuses.map((status, index) =>
    <option key={index} value={status.name}>
      {status.text}
    </option>
  );

  /**
   * Функция для проброса наверх события изменения значения селектора
   * @param {Event} e - Событие при прослушивании изменения селектора
   */
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