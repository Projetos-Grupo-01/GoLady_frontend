import type { Viagem } from "./Viagem"

export interface Veiculo {
    id: undefined | number
    categoria: string
    modelo: string
    placa: string
    velocidadeMedia: number
    viagem?: Viagem[] | null
}