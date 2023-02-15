function InfoTooltip({ message, onClose }) {
  return (
    <div
      className={`popup` + (message ? " popup_is-opened" : "")}
    >
      <div className="popup__container">
        <p
          className={
            "popup__info-message" +
            (message
              ? message.isSuccess
                ? " popup__info-message_type_success"
                : " popup__info-message_type_fail"
              : "")
          }
        >
          {message ? message.text : " "}
        </p>

        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
