import React from "react";

const Input = (props) => {
  return (
    <div class="mb-3">
      <label for={props.id} class="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        class="form-control"
        id={props.id}
        placeholder={props.placeholder ?? ""}
      />
    </div>
  );
};

export default Input;
