export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  avaliacao?: number;
  telefone?: string;
  token: string;
}