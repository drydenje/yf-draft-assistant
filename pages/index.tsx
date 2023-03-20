import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return(
  <>
      <Head>
         <title>Draft Assistant</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       </Head>
       <h1 className="text-3xl font-bold underline">Home</h1>
       <div>Home</div>
    </>
  )
}

Home.getLayout = function getLayout(Home: ReactElement) {
  return (
    <>{Home}</>
  );
};

export default Home;
