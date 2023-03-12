import Head from "next/head";
import Table from "@/components/Table";

const Player = ({ player }) => {
  const { name } = player;
  console.log(typeof name);
  return (
    <>
      <Head>
        {/* Warning: A title element received an array with more than 1 element as children. */}
        {/* <title>{name}'s Statistics</title> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>Players</h1>
      <h2>{name}</h2>
      <Table />
    </>
  );
};

// this is called at build-time
export async function getStaticProps() {
  // pull data from an external source
  // const res = await fetch("...");
  // const players = await res.json();

  // dummy data for development
  // const players = [
  //   {
  //     name: "Mike Trout",
  //   },
  // ];

  // const player = players[0];

  const player = {
    name: "Mike Trout",
  };

  return {
    props: {
      player,
    },
  };
}

export default Player;
