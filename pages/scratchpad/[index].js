import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { formatMonth } from "@/Format/Date";

const ScratchPad = ({ pokemon }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const month = formatMonth(new Date());
  // console.log(".ENV:", process.env.HOST);

  return (
    <>
      <Head>
        <title>Code ScratchPad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Code ScratchPad: {month}</h1>
      <p>
        Just a place to keep next.js notes, as I develop. No real features here.
      </p>
      <p>Welcome, {pokemon.name}!</p>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
      <button onClick={handleClick}>Click me to go back home!</button>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const pokemon = await res.json();

  let paths = pokemon.results.map((p) => {
    return `/scratchpad/${p.name}`;
  });
  console.log("Paths:", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.index}`);
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default ScratchPad;
