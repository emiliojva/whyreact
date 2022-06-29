import React from "react";
import Input from "./formFields/Input";
import Loading from "./Loading";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [responseApi, setResponseApi] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // O comportamento padrão do Formulário é o envio e reload da pagina. Anularemos esse comportamento

    setLoading(true);
    setResponseApi("");

    const dados = { login: email }; // quando colocamos um valor dentro de um objeto literal {}, ele automaticamente replica o nome para propriedade

    /**
     * Funcoes sincronas. Empilhamento execuções. Espera cada linha terminar. Assim como o linguagens de servidor.
     */
    const auth = async () => {
      /**
       * Configuro dados da url e opções para tentar login em api externa
       * POST
       * Dados com JSON
       * Bearer no Authorization
       */
      const urlLogin =
        "http://www.inovuerj.sr2.uerj.br/desenvolvimento/secti/api/v1/auth/login";
      const options = {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + password, // Convenção W3C que diz ao navegador para descartar a informação após submit
        },
      };

      /**
       * Força uma tentativa e erro ao acessar uma api externa
       */
      let json;
      try {
        const response = await fetch(urlLogin, options);
        json = await response.json();
      } catch (err) {
        console.log("erro: " + err); // Failed to fetch
        json = err;
      } finally {
        /**
         * Fazer um suspense para testar o estado loading. Pois a requisição é muito rápida.
         */
        setTimeout(() => {
          console.log(json);
          setLoading(false); // desativo o estado de loading
          setResponseApi(json);
        }, 1500);
      }
    };

    /**
     * Executa função async dentro do handleSubmit()
     */
    auth();
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
