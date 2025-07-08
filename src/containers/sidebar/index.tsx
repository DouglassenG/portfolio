import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer, ListaIcones } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Douglas Michelini</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        DouglassenG
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
      <ListaIcones>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src="" alt="" />
          </a>
        </li>
      </ListaIcones>
    </SidebarContainer>
  </aside>
)

export default Sidebar
