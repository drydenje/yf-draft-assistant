import Head from "next/head";

const Players = ({ players }) => {
  return (
    <>
      <Head>
        <title>{players[0].name}'s Statistics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>Players</h1>
      <h2>{players[0].name}</h2>
    </>
  );
};

// this is called at build-time
export async function getStaticProps() {
  // pull data from an external source
  // const res = await fetch("...");
  // const players = await res.json();

  // dummy data for development
  const players = [
    {
      name: "Mike Trout",
    },
  ];

  return {
    props: {
      players,
    },
  };
}

export default Players;
