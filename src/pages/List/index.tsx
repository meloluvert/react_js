import * as S from './styles'
import { newDados} from "../Form"
import { ComponentCard } from '../../components'

export function List() {
  newDados.map(item => console.log(item))
  return (
    <S.Section>
      {newDados.map(item => (
        <ComponentCard
          key={item.id}
          data={item.data}
          mensagem={item.mensagem}
          titulo={item.titulo}
        />
      ))}
    </S.Section>
  )
}
