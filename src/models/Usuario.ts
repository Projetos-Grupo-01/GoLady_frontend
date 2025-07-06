import type { Viagem } from "./Viagem"

export interface Usuario {
    id: undefined | number
    nome: string
    usuario: string
    senha: string
    foto: string
    avaliacao: number
    telefone: string
    viagem?: Viagem[] | null
}