import '../styles/globals.css'
import Layout from '../Components/layout/layout'
import Head from 'next/head'
import { NotificationContextProvider } from '../store/notification-context'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width initial-scale=1'></meta>
        </Head>
      <Component {...pageProps} />
    </Layout>
    </NotificationContextProvider>
  )
}

export default MyApp
