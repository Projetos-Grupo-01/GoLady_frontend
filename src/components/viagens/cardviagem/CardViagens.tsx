import { MapPinIcon, PencilSimple, Trash } from "@phosphor-icons/react";
import type { Viagem } from "../../../models/Viagem";

interface CardViagemProps {
  viagem: Viagem;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

function CardViagens({ viagem, onDelete, onUpdate }: CardViagemProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl m-4 shadow-black/50">
      <header className="bg-cyan-900 text-white py-4 px-5">
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date(viagem.horariodesaida))}
      </header>

      <div className="flex flex-col bg-zinc-100 p-4 text-xl">
        <div className="flex items-center gap-1 py-0.5">
          <MapPinIcon size={24} className="flex-shrink-0" />
          <p className="truncate" title={viagem.enderecoPartida}>
            {viagem.enderecoPartida}
          </p>
        </div>

        <div className="flex items-center gap-1 py-0.5">
          <MapPinIcon
            size={24}
            color="#7D0700"
            weight="fill"
            className="flex-shrink-0"
          />
          <p className="truncate" title={viagem.enderecoChegada}>
            {viagem.enderecoChegada}
          </p>
        </div>

        <span className="pt-5">{viagem.veiculo?.modelo}</span>

        <p className="font-bold text-2xl">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(viagem.preco ?? 0)}
        </p>

        <div className="flex justify-between flex-wrap gap-2 mt-4">
          <button
            onClick={() => onUpdate(viagem.id!)}
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-cyan-900 hover:bg-cyan-700 text-white rounded-md text-sm font-semibold"
          >
            <PencilSimple size={20} />
            Atualizar
          </button>

          <button
            onClick={() => onDelete(viagem.id!)}
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-red-900 hover:bg-red-600 text-white rounded-md text-sm font-semibold"
          >
            <Trash size={20} />
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardViagens;

