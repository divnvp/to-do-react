export function UIInput(props) {
  /**
   * Функция для обновления значения инпута
   * @param {Event} e - Событие при прослушивании изменения инпута
   */
  const updateInput = (e) => {
    props.updateInput(e);
  }

  return (
    <section className="custom-input">
      <label>{props.label}</label>

      <input
        value={props.inputValue}
        type="text"
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={updateInput}
      />
    </section>
  )
}