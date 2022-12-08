import "./mybutton.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn] = useState(props.color);

  return (
    <button
      onClick={props.onTouchButton}
      style={{ backgroundColor: colorBtn, marginBotton: "10px" }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;
