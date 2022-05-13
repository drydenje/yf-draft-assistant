import Head from "next/head";
import Link from "next/link";
import FetchGraphQL from "@/services/Data/FetchGraphQL";

const Home = ({ results }) => {
  const leagues = results.data.leagues;

  return (
    <>
      <Head>
        <title>Draft Assistant - Leauges</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Leagues</h1>
      {leagues &&
        leagues.map((league) => (
          <div key={league.leagueId}>
            <Link href="/league/[id]" as={`/league/${league.leagueId}`}>
              <a>
                <h3>{league.name}</h3>
                <p>A description of the league</p>
              </a>
            </Link>
            <span>{league.leagueId}</span>
          </div>
        ))}
    </>
  );
};

export const getServerSideProps = async () => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  // const users = await res.json();
  // return { props: { users } };
  const leaguesQuery = `
  query {
    leagues {
      leagueId
      name
    }
   }`;

  const results = await FetchGraphQL(leaguesQuery);
  // console.log(results);
  return { props: { results } };
};

export default Home;
