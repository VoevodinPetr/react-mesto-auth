function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_img` + (card !== null && " popup_is-opened")}
    >
      <div className="popup__img-container">
        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть картинку"
          onClick={onClose}
        ></button>
        <img
          className="popup__img"
          src={card?.link}
          alt={card?.name}
        />
        <h3 className="popup__img-caption">
          {card !== null ? card.name : "#"}
        </h3>
      </div>
    </div>
  );
}

export default ImagePopup;
