import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { useUsuarios } from '../components/usuarioComponents/UsuariosContext/UsuarioProvider';
function LoginPage(props) {

  const {loginUsuario} = useUsuarios();
  const [usuarioLogin, setUsuarioLogin] = useState({email: "",password: ""})

  const handleUsuarioLoginChange = (event) =>{
    setUsuarioLogin(event.target.value);
  }

const handleSubmit = async(event) => {
  event.preventDefault();
  let status;
  try {
    status = await loginUsuario(usuarioLogin)
  } catch (error) {
    
  }
}

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img alt="e-commerce" src="../src/Components/logo.png" />
          </Link>
        </div>
      </nav>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Iniciar sesión</h2>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(handleUsuarioLoginChange) => setUsuarioLogin(handleUsuarioLoginChange.target.value)}
              required
            />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(handleUsuarioLoginChange) => setUsuarioLogin(handleUsuarioLoginChange.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Iniciar sesión
          </button>

          <br></br>

          <p className="login-links">
            <span>
              <Link to="/">¿Olvidaste tu contraseña?</Link>
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>
              <Link to="/">Crear cuenta</Link>
            </span>
          </p>

          <br></br>

          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="back-button" type="button">
              <span>Atrás</span>
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
}

export default LoginPage;
