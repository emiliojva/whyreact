import React from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  AUTH_TOKEN_VALIDADE,
  GET_MUNICIPIOS_POR_REGIOES,
  GET_REGIOES,
} from "../ApiService";
import CirculoAtivo from "../components/CirculoAtivo";
import Loading from "../Loading";

const MunicipiosPorRegiao = () => {
  const [listRegioes, setListRegioes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate(); // retorna uma função para navegar pelas rotas nomeadas em app
  const params = useParams();

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
      } else {
        const { response, json } = await GET_MUNICIPIOS_POR_REGIOES(
          token,
          params.regiao_id
        );
        setListRegioes(json);
      }
      setLoading(false);
    };

    /**
     * Chamando validacao do token
     */
    validarToken();
  }, [navigate, params]);

  if (loading) return <Loading active={loading} />; // Nosso loading component interagindo com o estado loading da Pagina de Login

  return (
    <div className="container">
      <h3>Municipios da Região: {params.regiao_nome} </h3>
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
          {listRegioes &&
            listRegioes.map((regiaoObject) => (
              <tr key={regiaoObject.id}>
                <th scope="row">{regiaoObject.id}</th>
                <td>
                  <Link to={"municipiosPorRegiao/" + regiaoObject.id}>
                    {regiaoObject.nome}
                  </Link>
                </td>
                <td align="center">
                  <CirculoAtivo active={Number(regiaoObject.ativo)} />{" "}
                  {/* Transformamos em Number. Json Tranzendo string */}
                </td>
                <td>{regiaoObject.data_criacao}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MunicipiosPorRegiao;
