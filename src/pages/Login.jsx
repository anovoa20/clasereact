import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full">
      <h2 className="m-3 text-center text-3xl font-extrabold text-gray-900">
        Inicia sesión en tu cuenta
      </h2>
      <form className="mt-8">
        <div>
          <input
            className="appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500"
            type="email"
            placeholder="pepe@cuenta.com"
            required
          />
          <input type="password" required />
        </div>
        <div>
          <label htmlFor="recuerdame">
            <input type="checkbox" name="recuerdame" />
            Recuérdame
          </label>
        </div>
        <div>
          <Link to="/">¿Olvidaste tu contraseña?</Link>
        </div>
        <div>
          <Link to="/admin">
            <button type="submit">Iniciar Sesión</button>
          </Link>
        </div>
        <div>
          <button>Continúa con Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
