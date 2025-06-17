import '../styles/global.css';

import type { EmotionCache } from '@emotion/react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import createEmotionCache from '@/config/createEmotionCache';
import theme from '@/config/theme';
import { ToastifyProvider } from '@/templates';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ToastifyProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_APP_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_APP_GA_ID}');
        `}
        </Script>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            {/* <CssBaseline /> */}
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </ToastifyProvider>
    </CacheProvider>
  );
};

export default App;
