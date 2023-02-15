import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete, likes }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((person) => person._id === currentUser._id);
  const activeLikeButtonClassName = "button_active";

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="cards__foto">
      <img
        className="cards__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      {isOwn && (
        <button
          className="button button_type_delete"
          type="button"
          aria-label="Удалить"
          onClick={handleCardDelete}
        ></button>
      )}

      <div className="cards__block">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-container">
          <button
            type="button"
            aria-label="Лайк"
            className={
              "button_type_like " + (isLiked && activeLikeButtonClassName)
            }
            onClick={handleCardLike}
          ></button>
          <span className="cards__like-number">{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
