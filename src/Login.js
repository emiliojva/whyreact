import React from "react";
import Input from "./formFields/Input";

const Login = () => {
  return (
    <div
      class="d-flex flex-column justify-content-center "
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      {/* Campo email */}
      <div class="col-4 ">
        <Input id="email" type="email" label="Email" />
      </div>

      {/* Campo Senha */}
      <div class="col-4">
        <Input id="senha" type="password" label="Senha" />
      </div>

      {/* button submit */}
      <div class="col-lg-2 col-1 ">
        <button type="button" class="btn btn-primary">
          Logar
        </button>
      </div>
    </div>
  );
};

export default Login;
