import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import Error from "next/error"
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/theme'
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ProgressBar from "@badrap/bar-of-progress"
import { Router } from 'next/router'

//11.34. Reutilizando a lógica de renderização de erro - 2'
interface CustomAppProps extends NextPageProps {}

//11.34. Reutilizando a lógica de renderização de erro - 3'
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, "pageProps">

//11.50. Barra de progresso - 6'
const progress = new ProgressBar({
  size: 2,
  color: light.primaryBackground,
  delay: 100,
});

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  
  if(pageProps.error) {
    return(
      //11.35. Componente Error do next - 1', 4'40"
      <Error 
        statusCode={pageProps.error.statusCode} 
        title={pageProps.error.message} 
        />
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

//11.50. Barra de progresso - 6'20"
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default MyApp
