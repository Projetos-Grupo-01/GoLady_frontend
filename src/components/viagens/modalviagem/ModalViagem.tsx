import React from "react";
import type { Viagem } from "../../../models/Viagem";

interface ModalViagemProps {
  isOpen: boolean;
  viagem: Viagem;
  onClose: () => void;
}

export function calcularTempoViagem(viagem: Viagem): string {
  if (!viagem || !viagem.veiculo) {
    return "Dados incompletos";
  }

  const { distancia, veiculo } = viagem;
  const velocidade = veiculo.velocidadeMedia;

  if (velocidade <= 0 || isNaN(velocidade)) {
    return "Velocidade inválida";
  }

  const tempo = distancia / velocidade; // tempo em horas
  const horas = Math.floor(tempo);
  const minutos = Math.round((tempo - horas) * 60);

  let resultado = "";

  if (horas > 0) {
    resultado += `${horas}h`;
  }

  if (minutos > 0) {
    resultado += horas > 0 ? ` ${minutos}min` : `${minutos}min`;
  }

  if (resultado === "") {
    resultado = "0min";
  }

  return resultado;
}

const ModalViagem: React.FC<ModalViagemProps> = ({
  isOpen,
  viagem,
  onClose,
}) => {
  if (!isOpen) return null;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);

  const formatDistance = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const formatSpeed = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="flex flex-col justify-between rounded-2xl overflow-hidden w-[95vw] md:w-full max-w-md relative shadow-lg">
        <header className="bg-cyan-900 text-white py-4 px-5 text-2xl font-bold text-center">
          Detalhes da Viagem
          <button
            className="absolute top-2 right-2 text-gray-200 hover:text-white text-2xl font-bold cursor-pointer mr-2"
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
              {viagem.distancia !== undefined
                ? `${formatDistance(viagem.distancia)} km`
                : "-"}
            </p>
            <p>
              <span className="font-medium">Preço:</span>{" "}
              {viagem.preco !== null && viagem.preco !== undefined
                ? formatCurrency(viagem.preco)
                : "-"}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-medium">Tempo estimado:</span>{" "}
              {calcularTempoViagem(viagem)}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-medium">Nome:</span>{" "}
              {viagem.usuario?.nome ?? "-"}
            </p>
          </div>
          <div>
            <p>
              <span className="font-medium">Categoria:</span>{" "}
              {viagem.veiculo?.categoria ?? "-"}
            </p>
            <p>
              <span className="font-medium">Modelo:</span>{" "}
              {viagem.veiculo?.modelo ?? "-"}
            </p>
            <p>
              <span className="font-medium">Placa:</span>{" "}
              {viagem.veiculo?.placa ?? "-"}
            </p>
            <p>
              <span className="font-medium">Velocidade Média:</span>{" "}
              {viagem.veiculo?.velocidadeMedia !== undefined
                ? `${formatSpeed(viagem.veiculo.velocidadeMedia)} km/h`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViagem;
