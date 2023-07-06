import * as S from './styles';
import { dados } from "../../services/dados";
const newDados = {}
export function pushDados(data, titulo, mensagem) {
  const newData = {data, titulo, mensagem };
  newDados.push(newData);
}

export function Form() {
  const handlePushDados = () => {
    const data = document.getElementById("data").value;
    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;

    pushDados(data, titulo, mensagem);
  };

export updateDados = []
  return (
    <S.Form>
      <label htmlFor="data">Data</label>
      <input type="text" name="data" id="data" />
      <label htmlFor="titulo">Título</label>
      <input type="text" name="titulo" id="titulo" />
      <label htmlFor="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" cols="30" rows="10"></textarea>
      <button onClick={handlePushDados}>Adicionar Dados</button>
    </S.Form>
  );
}
