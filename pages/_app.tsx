import type { ReactElement, ReactNode } from "react";
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from "@/domain/Layout";
import "@/styles/normalize.css";
import "@/styles/globals.css";
import { Mulish } from 'next/font/google';
import { ThemeProvider } from "next-themes";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '700'],
})

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider defaultTheme="system" attribute="class">
      <Layout className={mulish.className}>
        <Component {...pageProps}/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
