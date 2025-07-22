import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Veiculo } from "../../../models/Veiculo";
import type { Viagem } from "../../../models/Viagem";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type { Usuario } from "../../../models/Usuario";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

const FormViagem = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [viagem, setViagem] = useState<Viagem>({
    id: undefined,
    distancia: 0,
    preco: null,
    enderecoPartida: "",
    enderecoChegada: "",
    horariodesaida: "",
    horariodechegada: "",
    usuario: null,
    veiculo: null,
  });


  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  const { usuario } = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    buscar("/usuarios/all", setUsuarios, {
      headers: {
        Authorization: token
      }
    })
    buscar("/veiculos", setVeiculos, {
      headers: {
        Authorization: token
      }
    });

    if (id) {
      buscar(`/viagens/${id}`, setViagem, {
        headers: {
          Authorization: token
        }
      });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setViagem({ ...viagem, [e.target.name]: e.target.value });
  };

  const handleSelectUsuario = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const user = usuarios.find(u => u.id === Number(e.target.value)) || null
    setViagem({ ...viagem, usuario: user })
  }

  const handleSelectVeiculo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const veic = veiculos.find((v) => v.id === Number(e.target.value)) || null;
    setViagem({ ...viagem, veiculo: veic });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await atualizar("/viagens", viagem, setViagem, {
          headers: {
            Authorization: token
          }
        });
        ToastAlerta("Viagem atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar("/viagens", viagem, setViagem, {
          headers: {
            Authorization: token
          }
        });
        ToastAlerta("Viagem cadastrada com sucesso!", "sucesso");
      }
      navigate("/");
    } catch {
      ToastAlerta("Erro ao salvar viagem", "erro");
    }
  };

  useEffect(() => {
    if (token === "") {
      ToastAlerta('Você precisa estar logado', 'info')
      navigate('/')
    }
  }, [token])

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {id ? "Editar Viagem" : "Cadastrar Viagem"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Endereço de Partida</label>
          <input
            name="enderecoPartida"
            value={viagem.enderecoPartida}
            onChange={handleChange}
            placeholder="Digite o endereço de partida"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Endereço de Chegada</label>
          <input
            name="enderecoChegada"
            value={viagem.enderecoChegada}
            onChange={handleChange}
            placeholder="Digite o endereço de chegada"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Distância (km)</label>
            <input
              name="distancia"
              type="number"
              value={viagem.distancia}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Horário de Saída</label>
            <input
              name="horariodesaida"
              type="datetime-local"
              value={viagem.horariodesaida}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Usuário</label>
          <select
            onChange={handleSelectUsuario}
            value={viagem.usuario?.id || ""}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="">Selecione o usuário</option>
            {usuarios.map((u) => (
              <option key={u.id} value={u.id}>
                {u.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Veículo</label>
          <select
            onChange={handleSelectVeiculo}
            value={viagem.veiculo?.id || ""}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="">Selecione o veículo</option>
            {veiculos.map((v) => (
              <option key={v.id} value={v.id}>
                {v.modelo} - {v.placa}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition"
          >
            {id ? "Atualizar" : "Cadastrar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormViagem;
