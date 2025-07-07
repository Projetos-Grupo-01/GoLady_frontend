import { useEffect, useState } from "react"
import CardViagens from "../cardviagem/CardViagens"
import type { Viagem } from "../../../models/Viagem"
import { ColorRing } from "react-loader-spinner"
import { buscar, deletar } from "../../../services/service.ts"
import { ToastAlerta } from "../../../utils/ToastAlerta.ts"
import { useNavigate } from "react-router-dom";


function ListaViagens() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [viagens, setViagens] = useState<Viagem[]>([])

  const navigate = useNavigate();

const handleUpdate = (id: number) => {
  navigate(`/editar/viagem/${id}`);
};


  async function buscarViagens() {
    try {
      setIsLoading(true)
      await buscar('/viagens', setViagens)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      ToastAlerta('Houve um erro ao carregar as viagens', 'erro')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    buscarViagens()
  }, [viagens.length])

  async function handleDelete(id: number) {
    const confirmacao = window.confirm("Deseja realmente deletar esta viagem?");
    if (!confirmacao) return;

    try {
      await deletar(`/viagens/${id}`);
      ToastAlerta("Viagem deletada com sucesso!", "sucesso");
      setViagens(viagens.filter((v) => v.id !== id));
    } catch (error) {
      ToastAlerta("Erro ao deletar a viagem!", "erro");
      console.error(error);
    }
  }

  return (
    <>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#7D0700', '#FD7866', '#FAD3C4', '#BBD5CC', '#115B69']}
        />
      )}
      <div className="flex justify-center w-full p-8 bg-[#d7d7d793]">
        <div className="container flex flex-col mx-2">
          {
            (!isLoading && viagens.length) === 0 && (
              <span className="text-3xl text-center my-8 font-bold">
                Nenhuma Viagem foi encontrada!
              </span>
            )
          }

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5">
            {
             viagens.map((viagem) => (
              viagem.id !== null && (
                <CardViagens
                  key={viagem.id}
                  viagem={viagem}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              )
            ))

            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaViagens
