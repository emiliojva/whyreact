import React from "react";

const Regiao = () => {
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
