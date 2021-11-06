import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primaryHover: string,
      darkText: string,
      regularText:string,
      greyedOutText: string,
      elementBg: string
    },
    fontSizes: {
      regular: string,
      subheading: string,
      heading: string,
      pricing: string
    }
  }
}