import '../../styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Internacionalização</title>
        <meta charSet='utf-8' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
