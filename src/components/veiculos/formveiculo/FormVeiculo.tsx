import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Veiculo } from "../../../models/Veiculo";


import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";


function FormVeiculo() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);

  const { usuario } = useContext(AuthContext)
  const token = usuario.token


  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/veiculos/${id}`, setVeiculo, {
        headers: {
          Authorization: token
        }
      })
    } catch (error: any) {
      ToastAlerta('Veiculo não encontrado!', 'info')
      console.error(error)
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setVeiculo({
      ...veiculo,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/veiculos`, veiculo, setVeiculo, {
          headers: {
            Authorization: token
          }
        })
        ToastAlerta('Veiculo atualizado com sucesso', 'sucesso')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        ToastAlerta('Erro ao atualizar o Veiculo', 'erro')
        console.error(error)
      }

    } else {
      try {
        await cadastrar(`/veiculos`, veiculo, setVeiculo, {
          headers: {
            Authorization: token
          }
        })

        ToastAlerta('Veiculo cadastrado com sucesso', 'sucesso')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        ToastAlerta('Erro ao cadastrar o Veiculo', 'erro')
        console.error(error)
      }
    }

    setIsLoading(false)
    retornar();

  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta('Você precisa estar logado', 'info')
      navigate('/')
    }
  }, [token])

  function retornar() {
    navigate("/veiculos")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-2 pt-25 md:pt-0">
      <h1 className="text-3xl md:text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Veiculo' : 'Editar Veiculo'}
      </h1>

      <form className="w-full max-w-md md:max-w-1/2 flex flex-col gap-4 px-2"
        onSubmit={gerarNovoVeiculo}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name='categoria'
            className="bg-white border-2 border-slate-700 rounded p-2 utral-800 text-base md:text-lg"
            required
            value={veiculo.categoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="modelo">Modelo</label>
          <input
            type="text"
            placeholder="Modelo"
            name='modelo'
            className="bg-white border-2 border-slate-700 rounded p-2 utral-800 text-base md:text-lg"
            required
            value={veiculo.modelo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="placa">Placa</label>
          <input
            type="text"
            placeholder="Placa"
            name='placa'
            className="bg-white border-2 border-slate-700 rounded p-2 utral-800 text-base md:text-lg"
            required
            value={veiculo.placa}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="velocidadeMedia">Velocidade Média</label>
          <input
            type="text"
            placeholder="Velocidade Média"
            name='velocidadeMedia'
            className="bg-white border-2 border-slate-700 rounded p-2 utral-800 text-base md:text-lg"
            required
            value={veiculo.velocidadeMedia}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-slate-400 mb-11 cursor-pointer transition delay-2
          hover:bg-slate-800 w-full md:w-1/2 py-2 mx-auto flex justify-center text-base md:text-lg"
          type="submit"
        >
          {isLoading ?
            <ClipLoader
              color="#ffffff"
              size={24}
            />
            :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormVeiculo