import React from "react";

const Header = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="http://google.com.br/?q=reactjs"
          >
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="http://google.com.br/?q=reactjs">
            Sobre
          </a>
        </li>

        <li className="nav-item d-none">
          <a className="nav-link" href="http://google.com.br/?q=reactjs">
            Conta
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
