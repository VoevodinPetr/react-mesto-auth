import React from "react";

import PopupWithForm from "./PopupWithForm";

function ConsentPopup({ isOpen, onClose, onConsent }) {
  function handleSubmit(event) {
    event.preventDefault();
    onConsent();
  }

  return (
    <PopupWithForm
      name="consent"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default ConsentPopup;
