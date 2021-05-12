import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from 'ooni-components'
import 'fontsource-fira-sans/latin.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira Sans";
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
