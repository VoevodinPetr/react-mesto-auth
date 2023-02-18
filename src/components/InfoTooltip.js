import Popup from "./Popup";

function InfoTooltip({ message, onClose }) {
  return (
    <Popup isOpen={message} onClose={onClose}>
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
    </Popup>
  );
}

export default InfoTooltip;
