/**
 * Funcoes sincronas. Empilhamento execuções. Espera cada linha terminar. Assim como o linguagens de servidor.
 * Autenticação com login(email) e senha.
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
 * Validar Token se ainda não expirou
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

/**
 * Retorna Regiões do Rio de Janeiro
 */
export const GET_REGIOES = async (token) => {
  /**
   * Configuro dados da url e opções para tentar validar o token em api externa
   * POST
   
   * Bearer no Authorization
   */
  const urlLogin =
    "http://www.inovuerj.sr2.uerj.br/desenvolvimento/secti/api/v1/regioes";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token, // Convenção W3C que diz ao navegador para descartar a informação após submit
    },
  };

  const response = await fetch(urlLogin, options);
  // console.log(response);
  const json = await response.json();
  // console.log(json);

  return { response, json };
};

/**
 * Retorna Regiões do Rio de Janeiro
 */
export const GET_MUNICIPIOS_POR_REGIOES = async (token, regiao_id) => {
  if (regiao_id == undefined) throw new Error("Preciso do ID da região");

  /**
   * Configuro dados da url e opções para tentar validar o token em api externa
   * POST
   
   * Bearer no Authorization
   */
  const urlLogin =
    "http://www.inovuerj.sr2.uerj.br/desenvolvimento/secti/api/v1/municipios/regiao/" +
    regiao_id;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token, // Convenção W3C que diz ao navegador para descartar a informação após submit
    },
  };

  const response = await fetch(urlLogin, options);
  // console.log(response);
  const json = await response.json();
  // console.log(json);

  return { response, json };
};
