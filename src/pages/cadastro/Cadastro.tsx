import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import "./Cadastro.css";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

import { ToastAlerta } from "../../utils/ToastAlerta";
import type { Usuario } from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: undefined,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    avaliacao: 0,
    telefone: "",
  });

  useEffect(() => {
    if (usuario.id !== undefined) {
      retornar();
    }
  }, [usuario.id]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovousuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        /* avaliação usuário */
        const usuarioComAvaliacao = {
          ...usuario,
          id: undefined,
          avaliacao: usuario.avaliacao ?? 0 /* se estiver undefined, vira 0*/,
        };
        await cadastrarUsuario(
          "/usuarios/cadastrar",
          usuarioComAvaliacao,
          setUsuario
        );

        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar usuário", "erro");
        console.error(error);
      }
    } else {
      ToastAlerta("As senhas devem ser iguais!", "erro");
      setUsuario({
        ...usuario,
        senha: "",
      });
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] min-h-screen">
        {/* Coluna com imagem de fundo */}
        <div className="fundoCadastro hidden lg:block"></div>

        {/* Formulário */}
        <div className="bg-[#D9E4DD] flex items-center justify-center px-6 pb-5 pt-25 md:pt-0">
          <form
            onSubmit={cadastrarNovousuario}
            /* Glass effect */
            className="form-glass w-full max-w-md p-6 rounded-xl flex flex-col gap-2"
          >
            <h2 className="text-[#001427] text-4xl text-center mb-2 font-bold">
              Cadastro
            </h2>

            {/* Nome */}
            <div className="flex flex-col w-full">
              <label htmlFor="nome" className="font-bold">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="rounded-lg p-3 border border-slate-500 bg-white"
                value={usuario.nome}
                onChange={atualizarEstado}
                placeholder="Maria de Souza"
              />
            </div>

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
                value={usuario.usuario}
                onChange={atualizarEstado}
                placeholder="maria.souza@email.com"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col w-full">
              <label htmlFor="telefone" className="font-bold">
                Telefone
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                className="rounded-lg p-3 border border-slate-500 bg-white"
                value={usuario.telefone}
                onChange={atualizarEstado}
                placeholder="019 9885-1388"
                maxLength={14} 
                pattern="\d{3}\s\d{5}-\d{4}" 
                required
              />
            </div>

            {/* Corfimação de senhas */}
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="senha" className="font-bold">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  className="rounded-lg p-3 border border-slate-500 bg-white w-full"
                  value={usuario.senha}
                  onChange={atualizarEstado}
                  placeholder="Senha"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="confirmarSenha" className="font-bold">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  className="rounded-lg p-3 border border-slate-500 bg-white w-full"
                  value={confirmaSenha}
                  onChange={handleConfirmarSenha}
                  placeholder="Confirme a senha"
                />
              </div>
            </div>

            {/* Foto */}
            <div className="flex flex-col w-full">
              <label htmlFor="foto" className="font-bold">
                Foto
              </label>
              <input
                type="text"
                id="foto"
                name="foto"
                className="rounded-lg p-3 border border-slate-500 bg-white"
                value={usuario.foto}
                onChange={atualizarEstado}
                placeholder="Insira o link da foto"
              />
            </div>

            {/* Botões de ação */}
            <div className="flex justify-center w-full mt-2">
              <button
                type="submit"
                className="bg-[#115B69] hover:bg-[#115a69d8] text-white py-2 px-4 rounded-lg w-1/2 flex justify-center items-center transition cursor-pointer"
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
                  "Cadastrar"
                )}
              </button>
            </div>

            {/* Link para login */}
            <hr className="my-3 border-[#66626279]" />
            <p className="text-center text-lg text-[#001427]">
              Já possui uma conta?{" "}
              <Link
                to="/login"
                className="text-[#115B69] hover:underline font-semibold"
              >
                Faça login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
