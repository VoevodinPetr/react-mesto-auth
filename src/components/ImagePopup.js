import Popup from "./Popup";

function ImagePopup({ card, onClose }) {
  return (
    <Popup onClose={onClose} isOpen={card !== null} name="picture">
      <img className="popup__img" src={card?.link} alt={card?.name} />
      <h3 className="popup__img-caption">{card !== null ? card.name : "#"}</h3>
    </Popup>
  );
}

export default ImagePopup;
