import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="regiao" className="nav-link">
            Regiões
          </Link>
        </li>

        <li className="nav-item">
          <Link to="sobre" className="nav-link">
            Sobre
          </Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Header;
