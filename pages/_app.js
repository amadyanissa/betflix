import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from "../redux/store"
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
