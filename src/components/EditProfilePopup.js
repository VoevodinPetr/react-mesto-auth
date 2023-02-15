import React, { useState, useEffect } from 'react'
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState("");

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeDescription(event) {
    const text = event.target.value;
    setDescription(text);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <input
          className="popup__input popup__input_name"
          type="text"
          id="popup__input_name"
          name="name_user"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
          onChange={handleChangeName}
          value={name ?? ""}
        />
        <span
          className="popup__input-error"
          id="popup__input_name-error"
        ></span>
        <input
          className="popup__input popup__input_job"
          id="popup__input_job"
          type="text"
          name="job_user"
          minLength="2"
          maxLength="200"
          placeholder="О себе"
          required
          onChange={handleChangeDescription}
          value={description ?? ""}
        />
        <span className="popup__input-error" id="popup__input_job-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
