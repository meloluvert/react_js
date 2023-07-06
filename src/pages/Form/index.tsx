import * as S from './styles';
import { dados } from "../../services/dados";

const newDadosForm = [];

function pushDados(date, title, msg) {
  const newData = {
    id: dados.length + newDadosForm.length + 1,
    data: date,
    titulo:title,
    mensagem:msg
  };
  newDadosForm.push(newData);

  console.log(newDadosForm)
  
}

export function Form() {
  const handlePushDados = () => {

    const data = document.getElementById("data").value;
    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;
    pushDados(data, titulo, mensagem);

  };
  return (
    <S.Form>
      <label htmlFor="data">Data</label>
      <input type="text" name="data" id="data" />
      <label htmlFor="titulo">Título</label>
      <input type="text" name="titulo" id="titulo" />
      <label htmlFor="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" cols="30" rows="10"></textarea>
      <a onClick={handlePushDados}>Adicionar Dados</a>
    </S.Form>
  );
}

//export const newDados = (newDadosForm.length == 0) ? dados : [...dados, newDadosForm];
export const newDados = dados.concat(newDadosForm)