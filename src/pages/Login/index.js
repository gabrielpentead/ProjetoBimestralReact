import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container-carrinho">
    <div className="formulario-login">
      <div className="login">
        <div className="centralizar">
          <div className="img-container">
            <img src="/imagens/LogoFeiraGreen.png" alt="Logo Feira Green" />
          </div>

          <form>
            <label htmlFor="username">
              <b>Nome de usuário</b>
            </label>
            <input
              type="text"
              placeholder="Insira o nome de usuário"
              id="username"
              name="username"
              required
            />

            <label htmlFor="password">
              <b>Senha</b>
            </label>
            <input
              type="password"
              placeholder="Insira a senha"
              id="password"
              name="password"
              required
            />

            <button type="/">Entrar</button>
          </form>

          <div className="links">
            <Link to="/">Esqueceu a senha?</Link>
            <Link to="/">Criar uma conta</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;