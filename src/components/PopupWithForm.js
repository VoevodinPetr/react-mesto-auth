import Popup from "./Popup";

function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      <form
        className="popup__form popup__form-edit"
        name="{name}"
        noValidate
        onSubmit={onSubmit}
      >
        {children}
        <button className="button button_type_save" type="submit">
          {buttonText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
