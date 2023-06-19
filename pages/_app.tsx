import type { ReactElement , ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from '@/domain/Layout/Layout';
import NavBar from '@/components/NavBar/NavBar';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // use the default layout defined at the page level if possible
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Layout>
      <NavBar />
      <Component {...pageProps} />
    </Layout>
  );
}