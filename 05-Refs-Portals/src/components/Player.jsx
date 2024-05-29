import { useState } from "react";

export default function Player() {
  const [enteredPlayername, setEnteredPlayername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayername(event.target.value);
  }

  function handleClick(event) {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayername : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayername} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
