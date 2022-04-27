import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from 'src/store/index'
import { Hooks } from 'src/hooks'
import { theme } from 'src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Hooks>
        <Head>
          <title>dashgo.</title>
          <meta
            name="description"
            content="A simple project starter to work with typescript, React, NextJs, Redux Toolkit and Chakra UI"
          />
        </Head>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hooks>
    </Provider>
  )
}

export default MyApp
