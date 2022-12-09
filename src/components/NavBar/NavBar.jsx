import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img src="/imgs/brandLogo/logoFarmaq.png" alt="brand Logo" className="brandLogoHeader"/>
          </Link>
        </li>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/category/higiene personal">Higiene Personal</Link>
        </li>
        <li>
          <Link to="/category/insumos">Insumos</Link>
        </li>
        <li>
          <Link to="/category/remedios">Remedios</Link>
        </li>
        <li>
          <Link to="/category/perfumeria">Perfumería</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
