/**
 * Funcoes sincronas. Empilhamento execuções. Espera cada linha terminar. Assim como o linguagens de servidor.
 */
export const AUTH_LOGIN = async (login, password) => {
  const body = { login: login }; // quando colocamos um valor dentro de um objeto literal {}, ele automaticamente replica o nome para propriedade

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
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + password, // Convenção W3C que diz ao navegador para descartar a informação após submit
    },
  };

  const response = await fetch(urlLogin, options);
  const json = await response.json();

  return { json, response };
};

/**
 * Validar Token
 */
export const AUTH_TOKEN_VALIDADE = async (token) => {
  const body = {};

  /**
   * Configuro dados da url e opções para tentar validar o token em api externa
   * POST
   
   * Bearer no Authorization
   */
  const urlLogin =
    "http://www.inovuerj.sr2.uerj.br/desenvolvimento/secti/api/v1/auth/validateToken";
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token, // Convenção W3C que diz ao navegador para descartar a informação após submit
    },
  };

  const response = await fetch(urlLogin, options);
  const json = await response.json();

  return { json, response };
};
