import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { RotatingLines } from "react-loader-spinner";
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  console.log(JSON.stringify(usuarioLogin));

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center bg-[#D9E4DD]">
        <form
          onSubmit={login}
          className="form-glass w-full max-w-md p-6 rounded-xl flex flex-col gap-2"
        >
          <h2 className="text-[#001427] text-5xl text-center mb-2 font-bold">
            Login
          </h2>

          {/* User */}
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="font-bold">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              className="rounded-lg p-3 border border-slate-500 bg-white"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
              placeholder="maria.souza@email.com"
            />
          </div>
          {/* Senha */}
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="font-bold">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="rounded-lg p-3 border border-slate-500 bg-white w-full"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          {/* Botão de login */}
          <button
            type="submit"
            className=" bg-[#115B69] text-white cursor-pointer
                        py-2 px-4 rounded-lg w-1/2 mx-auto flex justify-center items-center transition"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-slate-400 w-full" />

          <p className="text-center text-lg text-[#001427]">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-[#115B69] hover:underline font-semibold"
            >
              <span>Criar conta</span>
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
        
      </div>
    </>
  );
}

export default Login;