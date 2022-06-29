import React from "react";
import Input from "./formFields/Input";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div
      className="d-flex flex-column justify-content-center "
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      {/* Campo email */}
      <div className="col-4 ">
        <Input
          id="email"
          type="email"
          label="Email"
          value={email}
          setValue={(event) => setEmail(event.target.value)}
        />
      </div>

      {/* Campo Senha */}
      <div className="col-4">
        <Input
          id="senha"
          type="password"
          label="Senha"
          value={password}
          setValue={(event) => setPassword(event.target.value)}
        />
      </div>

      {/* button submit */}
      <div className="col-4 text-center">
        <button type="button" className="btn btn-primary">
          Logar
        </button>
      </div>
    </div>
  );
};

export default Login;
