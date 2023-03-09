import { Link } from "react-router-dom";
import React from "react";
import "boxicons";
import "./NavBar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img alt="e-commerce" src="../src/components/HomePage/logo.png" />
        </Link>
        <div className="navbar-search">
          <div id="search">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                name="search"
              />
              <button type="submit">
                <box-icon name="search-alt" color="#ffffff"></box-icon>
              </button>
            </form>
          </div>
        </div>

        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuarios</Link>
            </li>
            <li>
              <Link to="/imagenes">Imagenes</Link>
            </li>
            <li>
              <Link to="/dashboardadmin">Dashboard Admin</Link>
            </li>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
            <li>
              <Link to="/login">
                <div className="iconuser">
                  <box-icon name="user" color="#1c6bc3"></box-icon>
                </div>
                Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
