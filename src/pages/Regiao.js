import React from "react";
import { useNavigate } from "react-router";
import { AUTH_TOKEN_VALIDADE } from "../ApiService";

const Regiao = () => {
  const navigate = useNavigate(); // retorna uma função para navegar pelas rotas nomeadas em app

  /**
   * Hook Effect - Lida com Efeitos colateres
   *
   * Para React, tudo que fugir o fluxo de renderização normal (request, fetch, animações),
   * é considerado um efeito colateral.
   * O que significa que pode geral loop infinito na aplicação.
   * Fazendo ela renderizar pra sempre.
   * SEMPRE QUE MUDAMOS UM ESTADO, A APLICAÇÃO FAZ RELOAD NA RENDERIZAÇÃO DAS FUNÇÕES DE UM COMPONENTE REACT. NAO QUEREMOS ISSO AQU!
   * -
   * O Hook useEffect ser para nesse momento para dizer, só realize a chamada uma vez da função AUTH_TOKEN_VALIDADE
   */
  React.useEffect(() => {
    console.log("effect Regiao ...");
    /**
     * Precisamos criar essa função, pois nosso função AUTH_TOKEN_VALIDADE é async
     */
    const validarToken = async () => {
      const token = window.localStorage.getItem("#TOKEN");
      const { response, json } = await AUTH_TOKEN_VALIDADE(token);

      if (response.ok === false) {
        if (json.user === undefined) {
          console.log(response);
          navigate("/login"); // envio o usuario para página de login
        }
      }
    };

    /**
     * Chamando validacao do token
     */
    validarToken();
  });

  return (
    <div className="container">
      <h3>Regiões</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col" className="text-center">
              Ativo
            </th>
            <th scope="col">Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Região Metropolitana</td>
            <td align="center">
              {1 ? (
                <div
                  style={{
                    border: "1px solid green",
                    borderRadius: "30px",
                    height: "1rem",
                    width: "1rem",
                    background: "green",
                    textAlign: "center",
                    margin: "0px auto",
                  }}
                ></div>
              ) : (
                "DESATIVADA"
              )}
            </td>
            <td>2019-07-22 18:35:07</td>
          </tr>

          {/* Exemplos do Bootstrap  */}
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Regiao;
