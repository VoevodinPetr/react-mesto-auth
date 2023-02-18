import React, { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeLink(event) {
    const text = event.target.value;
    setLink(text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <input
          className="popup__input"
          id="popup__input_card-name"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span
          className="popup__input-error"
          id="popup__input_card-name-error"
        ></span>
        <input
          className="popup__input"
          id="popup__input_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span
          className="popup__input-error"
          id="popup__input_link-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
