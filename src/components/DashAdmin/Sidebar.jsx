import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul>
        <li>Dashboard</li>
        <li>
          <Link to= "/usuarios">Usuarios</Link>
        </li>

        <li>Productos</li>
        <li>Órdenes</li>
      </ul>
      <div className="user-options">
        <p>Nombre del usuario</p>
        <p>Cerrar sesión</p>
      </div>
    </div>
  );
}

export default Sidebar;
