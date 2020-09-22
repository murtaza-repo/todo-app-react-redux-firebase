import React from "react";

const Check = ({ checked, clickListener }) => {
  if (checked === true) {
    return (
      <button title="Undo Task" className="btn text-success" onClick={clickListener}>
        <span className="material-icons">check_circle_outline</span>
      </button>
      
    );
  } else {
    return (
      <button title="Mark as done" className="btn text-muted" onClick={clickListener}>
        <span className="material-icons">check_circle_outline</span>
      </button>
    );
  }
};

export default Check;

// optional
// <span
//   className="material-icons text-muted"
//   onClick={clickListener}
// >
//   check_circle_outline
// </span>

// <span
//   className="material-icons text-success"
//   onClick={clickListener}
// >
//   check_circle_outline
// </span>