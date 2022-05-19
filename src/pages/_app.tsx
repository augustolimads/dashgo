import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from 'src/store/index'
import { Contexts } from 'src/contexts'
import { theme } from 'src/styles/theme'
import { makeServer } from 'src/services/mirage'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from 'src/services/queryClient'

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    makeServer()
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Contexts>
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
        </Contexts>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
