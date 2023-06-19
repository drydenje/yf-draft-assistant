import type { ReactElement, ReactNode } from "react";
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from "@/domain/Layout";
import { oswald, montserrat } from "@/styles/fonts";
import "@/styles/normalize.css";
import "@/styles/globals.css";
import "@/styles/colours.css";

import { ThemeProvider } from "next-themes";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

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
