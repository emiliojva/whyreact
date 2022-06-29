import React from "react";

const Loading = (props) => {
  return (
    <>
      {/* Se a propriedada active estiver TRUE mostramos o loading */}
      {/* Técnica abaixa utiliza o operador lógico AND(&&). Se a premissa 1 e válida continuo fazendo as da direita */}
      {props.active && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Loading;
