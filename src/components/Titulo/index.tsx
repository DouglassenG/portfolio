import { Titulo as TituloEstilo } from './styles'

type Props = {
  children: string
}

const Titulo = (props: Props) => <TituloEstilo>{props.children}</TituloEstilo>

export default Titulo
