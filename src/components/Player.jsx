import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleNameChange(event) {
    setEditedName(event.target.value);
  }

  function handleSaveClick() {
    // Here you would typically update the player's name in the parent component or global state
    setIsEditing(false);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={editedName}
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{editedName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isEditing ? handleSaveClick : handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  )
}