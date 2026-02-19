import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleEditSaveClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, editedName);
    }
  }

  function handleNameChange(event) {
    setEditedName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
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
      <button onClick={handleEditSaveClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  )
}