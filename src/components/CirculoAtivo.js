import React from "react";

const CirculoAtivo = ({ active }) => {
  const cor = active ? "green" : "red";

  return (
    <div
      style={{
        border: `1px solid ${cor}`,
        borderRadius: "30px",
        height: "1rem",
        width: "1rem",
        background: `${cor}`,
        textAlign: "center",
        margin: "0px auto",
      }}
    ></div>
  );
};

export default CirculoAtivo;
