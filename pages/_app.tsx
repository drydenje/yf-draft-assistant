import type { ReactElement, ReactNode } from "react";
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from "@/domain/Layout";
import "@/styles/normalize.css";
import "@/styles/globals.css";
import "@/styles/colours.css";
import { Montserrat, Oswald } from 'next/font/google';
import { ThemeProvider } from "next-themes";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const oswald = Oswald({
  variable: '--heading-font',
  subsets:['latin'],
  // weight: ['400', '700']
})

const montserrat = Montserrat({
  variable: '--paragraph-font',
  subsets: ['latin'],
  // weight: ['400', '700'],
})

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider>
      <div className={montserrat.variable + " " + oswald.variable}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
