import React from "react";
import Input from "../formFields/Input";
import Loading from "../Loading";
import { AUTH_LOGIN } from "../ApiService";
import { Navigate, useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [responseApi, setResponseApi] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate(); // retorna uma função para navegar pelas rotas nomeadas em app

  /**
   * uso da palavra reservada async (ES6)
   * Para utilizar alguma função async(await for something)
   * precisamos que a função invocadora possua a palavra reservada async na frente.
   * Caso isso nao seja feito, handleSubmit nao vai aguardar o desfecho de AUTH_LOGIN
   */
  const handleSubmit = async (event) => {
    event.preventDefault(); // O comportamento padrão do Formulário é o envio e reload da pagina. Anularemos esse comportamento

    setLoading(true); // Estado de loading acionado para tentar logar
    setResponseApi(""); // limpar estado de resposta toda fez re-renderizar

    /**
     * Força uma tentativa e erro ao acessar uma api externa
     */
    let json_response;
    try {
      const { json, response } = await AUTH_LOGIN(email, password);
      if (response.ok === false) setError(response.message);
      json_response = json;
    } catch (err) {
      console.log("erro: " + err); // Failed to fetch
      json_response = err;
      setError(true);
    } finally {
      /**
       * Fazer um suspense para testar o estado loading. Pois a requisição é muito rápida.
       */
      setTimeout(() => {
        console.log(json_response);
        setLoading(false); // desativo o estado de loading
        setResponseApi(json_response); // capturamos o json retornado para resposta
        window.localStorage.setItem(
          "#TOKEN",
          json_response.jwt
        ); /* Armazenar Token do Usuario */
      }, 1500);

      /**
       * Mas um suspense :?) para ir para página com lista de regiões. Após 3 segundos
       */
      setTimeout(() => {
        navigate("/regiao");
      }, 3000);
    }
  };

  return (
    <section>
      <form
        method="post"
        className="d-flex flex-column justify-content-center "
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        disabled={loading === true || responseApi.jwt}
      >
        {/* Nosso loading component interagindo com o estado loading da Pagina de Login */}
        <Loading active={loading} />

        {/* Campo email */}
        <div
          className="col-5"
          style={responseApi.jwt ? { display: "none" } : {}}
        >
          <Input
            id="email"
            type="email"
            label="Email"
            value={email}
            setValue={(event) => setEmail(event.target.value)}
            disabled={loading === true || responseApi.jwt}
          />
        </div>

        {/* Campo Senha */}
        <div
          className="col-5"
          style={responseApi.jwt ? { display: "none" } : {}}
        >
          <Input
            id="senha"
            type="password"
            label="Senha"
            value={password}
            setValue={(event) => setPassword(event.target.value)}
            disabled={loading === true || responseApi.jwt}
          />
        </div>

        {/* button submit */}
        <div
          className="col-4 text-center"
          style={responseApi.jwt ? { display: "none" } : {}}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={loading === true || responseApi.jwt}
          >
            Logar
          </button>
        </div>

        {/* Respostas da API aqui. Error ou Success */}
        {responseApi && (
          <p>
            <br />
            {responseApi.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Login;
