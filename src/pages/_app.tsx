import * as React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache} from '@emotion/react'
import {CssBaseline} from '@mui/material'
import {ThemeProvider as NextThemeProvider} from 'next-themes'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import '../styles/globals.css'
import PageProvider from '../components/PageProvider'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ToastContainer} from 'react-toastify'
import createEmotionCache from '@/src/utils/createEmotionCache'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App: React.FunctionComponent<MyAppProps> = (props) => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <NextThemeProvider>
      <CacheProvider value={emotionCache}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <PageProvider>
              <CssBaseline />
              <Component {...pageProps} />
              <ToastContainer />
            </PageProvider>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </CacheProvider>
    </NextThemeProvider>
  )
}

export default App
