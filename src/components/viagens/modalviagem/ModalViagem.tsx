import React from "react";
import type { Viagem } from "../../../models/Viagem";

interface ModalViagemProps {
  isOpen: boolean;
  viagem: Viagem;
  onClose: () => void;
}

function calcularTempoViagem(
  horarioSaida: string,
  horarioChegada: string
): string {
  const saida = new Date(horarioSaida);
  const chegada = new Date(horarioChegada);
  const diffMs = chegada.getTime() - saida.getTime();
  if (isNaN(diffMs) || diffMs < 0) return "-";
  const horas = diffMs / (1000 * 60 * 60);
  return Math.ceil(horas) + "h";
}

const ModalViagem: React.FC<ModalViagemProps> = ({
  isOpen,
  viagem,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="flex flex-col justify-between rounded-2xl overflow-hidden w-full max-w-md relative shadow-lg">
        <header className="bg-cyan-900 text-white py-4 px-5 text-2xl font-bold text-center">
          Detalhes da Viagem
          <button
            className="absolute top-2 right-2 text-gray-200 hover:text-white text-2xl font-bold"
            onClick={onClose}
            aria-label="Fechar"
            style={{ background: "none", border: "none" }}
          >
            &times;
          </button>
        </header>
        <div className="flex flex-col bg-zinc-100 p-4 text-xl">
          <div className="mb-4">
            <p>
              <span className="font-medium">Partida:</span>{" "}
              {viagem.enderecoPartida}
            </p>
            <p>
              <span className="font-medium">Chegada:</span>{" "}
              {viagem.enderecoChegada}
            </p>
            <p>
              <span className="font-medium">Distância:</span>{" "}
              {viagem.distancia?.toFixed(2)} km
            </p>
            <p>
              <span className="font-medium">Preço:</span> R${" "}
              {viagem.preco?.toFixed(2)}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-medium">Tempo estimado:</span>{" "}
              {calcularTempoViagem(
                viagem.horariodesaida,
                viagem.horariodechegada
              )}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-medium">Nome:</span> {viagem.usuario?.nome}
            </p>
          </div>
          <div>
            <p>
              <span className="font-medium">Categoria:</span>{" "}
              {viagem.veiculo?.categoria}
            </p>
            <p>
              <span className="font-medium">Modelo:</span>{" "}
              {viagem.veiculo?.modelo}
            </p>
            <p>
              <span className="font-medium">Placa:</span>{" "}
              {viagem.veiculo?.placa}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViagem;
