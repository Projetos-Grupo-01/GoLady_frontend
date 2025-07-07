import { MapPinIcon } from "@phosphor-icons/react";
import type { Viagem } from "../../../models/Viagem";
import React, { useState } from "react";
import ModalViagem from "../modalviagem/ModalViagem";

interface CardViagemProps {
  viagem: Viagem;
}

function CardViagens({ viagem }: CardViagemProps) {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <>
      <div
        className="flex flex-col justify-between rounded-2xl overflow-hidden cursor-pointer"
        onClick={abrirModal}
      >
        <header className="bg-cyan-900 text-white py-4 px-5">
          {new Intl.DateTimeFormat(undefined, {
            dateStyle: "full",
            timeStyle: "medium",
          }).format(new Date(viagem.horariodesaida))}
        </header>
        <div className="flex flex-col bg-zinc-100 p-4 text-xl">
          <div className="flex items-center gap-1 py-0.5">
            <MapPinIcon size={24} />
            <p>{viagem.enderecoPartida}</p>
          </div>
          <div className="flex items-center gap-1 py-0.5">
            <MapPinIcon size={24} color="#7D0700" weight="fill" />
            <p>{viagem.enderecoChegada}</p>
          </div>

          <span className="pt-5">{viagem.veiculo?.modelo}</span>
          <p className="font-bold text-2xl">R$ {viagem.preco}</p>
        </div>
      </div>
      <ModalViagem isOpen={modalAberto} viagem={viagem} onClose={fecharModal} />
    </>
  );
}

export default CardViagens;
