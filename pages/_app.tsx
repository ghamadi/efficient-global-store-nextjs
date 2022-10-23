import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import StoreProvider from '../store/store-provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <div className='wrapper'>
        <h3>App</h3>
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  )
}

export default MyApp
