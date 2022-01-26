import { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");
  const addPlayer = (name) => {
    console.log("I am adding a player", name);
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => set_name(event.target.value)}
        />{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
            set_name("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
