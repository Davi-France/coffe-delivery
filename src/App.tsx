
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ProductContextProvider } from './contexts/ProductContext'

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ProductContextProvider>
            <Router />
          </ProductContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
