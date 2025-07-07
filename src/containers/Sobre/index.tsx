import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nulla
      quibusdam expedita illo inventore neque beatae sapiente laudantium dicta
      dolore, fuga odit, nesciunt laboriosam autem earum delectus magnam soluta
      alias?
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=DouglassenG&show_icons=true&theme=default"
        alt=""
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=DouglassenG&layout=compact"
        alt=""
      />
    </GithubSecao>
  </section>
)

export default Sobre
