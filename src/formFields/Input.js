import React from "react";

const Input = (props) => {
  /* Desestrutução do objeto props. Nativo do callback component React */
  /* A variavel rest, no final com três pontos na frente. Indica que, o que você não desestruturou implicitamente em props "restará" em rest. */
  /* # https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters */
  const { id, type, value, label, setValue, ...rest } = props;

  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {label} {value && " - " + value}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={setValue}
        className="form-control"
        {...rest} /* Spread ES6 */
        /* 
        Spread. Nova feature do JavaScript ES6. 
        Todas as props que não forem ser usadas individualmente, podem ser espalhadas(spread) automaticamente com {...props}
        Isso gera o equivalente a: disabled='disabled'
        */
      />
    </div>
  );
};

export default Input;
