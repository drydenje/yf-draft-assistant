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
       <h2>Lorem ipsum dolor</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda, ullam veritatis illo laboriosam illum? Esse, libero cumque. Velit eaque laborum minima atque reiciendis inventore fuga saepe sed temporibus quasi!</p>
       <h2>Lorem ipsum dolor</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda, ullam veritatis illo laboriosam illum? Esse, libero cumque. Velit eaque laborum minima atque reiciendis inventore fuga saepe sed temporibus quasi!</p>
       <h2>Lorem ipsum dolor</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda, ullam veritatis illo laboriosam illum? Esse, libero cumque. Velit eaque laborum minima atque reiciendis inventore fuga saepe sed temporibus quasi!</p>
    </>
  )
}

Home.getLayout = function getLayout(Home: ReactElement) {
  return (
    <>{Home}</>
  );
};

export default Home;
