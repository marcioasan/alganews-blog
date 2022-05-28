import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/theme'
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

//11.34. Reutilizando a lógica de renderização de erro - 2'
interface CustomAppProps extends NextPageProps {}

//11.34. Reutilizando a lógica de renderização de erro - 3'
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, "pageProps">

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  
  if(pageProps.error) {
    return(
      <div>
        <h1>{ pageProps.error.message }</h1>
      </div>
    )
  }

  return (
  <ThemeProvider theme={light}>
    <Header />
    <Content>
      <Component {...pageProps} />
    </Content>
    <Footer />
    <GlobalStyles />
  </ThemeProvider>
  );
}

export default MyApp
