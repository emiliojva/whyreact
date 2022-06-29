import React from "react";

const Header = () => {
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="http://google.com.br/?q=reactjs"
          >
            Home
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="http://google.com.br/?q=reactjs">
            Sobre
          </a>
        </li>

        <li class="nav-item d-none">
          <a class="nav-link" href="http://google.com.br/?q=reactjs">
            Conta
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
