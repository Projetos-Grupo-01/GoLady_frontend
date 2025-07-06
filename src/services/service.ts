import axios from "axios";

export async function deletar(url: string): Promise<void> {
  await axios.delete(url);
}