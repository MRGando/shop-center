import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Context from '@/components/Context'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context>
    </>
  )
}
