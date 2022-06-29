import React from "react";
import { useNavigate } from "react-router";
import { AUTH_TOKEN_VALIDADE } from "../ApiService";

const Home = () => {
  const navigate = useNavigate(); // retorna uma função para navegar pelas rotas nomeadas em app
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log("effect home ...");
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
        setLoading(false);
      }
    };

    /**
     * Chamando validacao do token
     */
    validarToken();
  }, []);

  if (loading) return null;

  return <div className="text-center">Home do APP</div>;
};

export default Home;
