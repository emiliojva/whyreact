import React from "react";

const Loading = (props) => {
  return (
    <>
      {/* Se a propriedada active estiver TRUE mostramos o loading */}
      {/* Técnica abaixa utiliza o operador lógico AND(&&). Se a premissa 1 e válida continuo fazendo as da direita */}
      {props.active && (
        <section
          className="d-flex flex-column justify-content-center "
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="spinner-border d-flex justify-content-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
    </>
  );
};

export default Loading;
