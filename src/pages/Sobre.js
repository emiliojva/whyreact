import React from "react";

const Sobre = () => {
  return (
    <div>
      <h4 className="text-center">App Mini Workshop - Por que React ?</h4>
      <hr />

      <ul>
        <li>Neste APP entregaremos uma demanda do cotidiano</li>
        <li>
          Na area de Desenvolvimento de Aplicações WEB é comum consumir alguma
          API
        </li>
        <li>
          Consumiremos uma API utilizada para o projeto legado MaInE. Que mapeia
          as regiões da UERJ e seus fomentos
        </li>
        <li>
          Consumiremos apenas Regiões existente no estado do Rio de Janeiro, bem
          como seus municipios atrelados.
        </li>
        <li>
          O Maior Objetivo aqui, é aprender fazendo, e encontrar soluções para o
          dia a dia. Isso tudo, com ReactJS.
        </li>
      </ul>
    </div>
  );
};

export default Sobre;
