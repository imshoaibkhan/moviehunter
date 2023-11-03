import React from "react";
import "../styles/Chip.css";

const Chip = ({ children, onClick, selected }) => {
  const badgeStyles = {
    backgroundColor: selected ? '#dadadac2' : '',
    color: selected ? "#22254b" : '',
  };
  return (
    <span onClick={onClick} className="chip" style={badgeStyles}>
      {children}
    </span>
  );
};

export default Chip;
