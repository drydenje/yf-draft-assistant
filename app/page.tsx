// import Head from "next/head";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Draft Assistant',
  description: 'A program that will show baseball statistics and help you draft a better fantasy team',
}

const Page = () => {
  return(
  <>
      {/* <Head>
         <title>Draft Assistant</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       </Head> */}

       <h1>A quick overview of this project</h1>
       <h2>A chance to explore technologies</h2>
       <div>
        Click for details
          <ul>
            <li>Building and using a baseball statistics graphQL API</li>
            <li>Learning the Next.js framework</li>
          </ul>
       </div>
       <h2>Building a </h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda, ullam veritatis illo laboriosam illum? Esse, libero cumque. Velit eaque laborum minima atque reiciendis inventore fuga saepe sed temporibus quasi!</p>
       <h2>Lorem ipsum dolor</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda, ullam veritatis illo laboriosam illum? Esse, libero cumque. Velit eaque laborum minima atque reiciendis inventore fuga saepe sed temporibus quasi!</p>
    </>
  )
}

export default Page;