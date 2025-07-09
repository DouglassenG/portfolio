import 'styled-components'

const temaLight = {
  corPrincipal: '#282a35',
  corSecundaria: '#949494',
  corDeFundo: '#fff',
  corDeFundoBotao: '#4476bf',
  corDaBorda: '#c1c1c1'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
    corDeFundo: string
    corDeFundoBotao: string
    corDaBorda: string
  }
}

export default temaLight
