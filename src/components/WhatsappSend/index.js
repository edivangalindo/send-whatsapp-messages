import React, { useState } from "react";

export default function() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsappMessage = (phone, message) =>
    window.open(`https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phone
    )}&text=${encodeURIComponent(message)}`);

  return (
    <>
      <label id="phoneNumber-label" htmlFor="phoneNumber">
        {phoneNumber}
      </label>
      <br />
      <input
        id="phoneNumber"
        placeholder="Telefone"
        onChange={event => setPhoneNumber(event.target.value)}
      />
      <br />
      <label id="message-label" htmlFor="setMessage">
        {message}
      </label>
      <br />
      <input
        id="setMessage"
        placeholder="Mensagem"
        onChange={event => setMessage(event.target.value)}
      />
      <br />
      <button onClick={() => sendWhatsappMessage(phoneNumber, message)}>
          Enviar mensagem
      </button>
    </>
  );
}
