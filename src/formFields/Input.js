import React from "react";

const Input = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label} {props.value && " - " + props.value}
      </label>
      <input
        id={props.id}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder ?? ""}
        value={props.value}
        onChange={props.setValue}
      />
    </div>
  );
};

export default Input;
