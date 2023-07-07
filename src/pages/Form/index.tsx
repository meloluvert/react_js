import * as S from './styles';
import { dados } from "../../services/dados";
import { ICard } from '../../components/Card/index';
const newDadosForm : ICard[] = [];
var newDados = dados;
function pushDados(item: ICard) {
  newDadosForm.push(item)
  newDados = [newDadosForm,dados].flat()
  console.log(newDados)
}

export function Form() {
  const handlePushDados = () => {

    const data = document.getElementById("data").value;
    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;
    pushDados({data, titulo, mensagem});
  };
  return (
    <S.Form>
      <label htmlFor="data">Data</label>
      <input type="date" name="data" id="data" />
      <label htmlFor="titulo">Título</label>
      <input type="text" name="titulo" id="titulo" />
      <label htmlFor="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" cols="30" rows="10"></textarea>
      <a onClick={handlePushDados}>Adicionar Dados</a>
    </S.Form>
  );
}

export {newDados} ;
