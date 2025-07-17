import type { Usuario } from "./Usuario"
import type { Veiculo } from "./Veiculo"

export interface Viagem {
    id: undefined | number
    distancia: number
    preco: number | null
    enderecoPartida: string
    enderecoChegada: string
    horariodesaida: string
    horariodechegada: string
    usuario?: Usuario | null
    veiculo: Veiculo | null
}