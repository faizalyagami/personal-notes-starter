import React from "react";

const ActiveButton = ({ id, onActive }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onActive(id)}>
      Pindahkan
    </button>
  );
};

export default ActiveButton;
