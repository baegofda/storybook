import React from "react";

const Button = ({ primary, label }) => {
  return (
    <button class="btn" type="button">
      {label}, {primary}
    </button>
  );
};

export default Button;
