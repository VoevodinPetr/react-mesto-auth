import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <input
          className="popup__input"
          id="popup__input_user-avatar"
          type="url"
          name="avatar_user"
          placeholder="Ссылка на аватар"
          required
          ref={avatarRef}
        />
        <span
          className="popup__input-error"
          id="popup__input_user-avatar-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
