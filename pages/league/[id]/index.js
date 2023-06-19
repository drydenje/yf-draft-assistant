import Team from "@/components/Team";

// import { useRouter } from "next/router";
import FetchGraphQL from "@/services/Data/FetchGraphQL";

const league = ({ league }) => {
  // const router = useRouter();
  const teams = league.team_list;
  // const { id } = router.query;
  // console.log(league.team_list);
  return (
    <>
      <div>
        <h1>This is league: {league.name}</h1>
      </div>
      <div>
        {teams.length > 0 &&
          teams.map((team) => <Team team={team} key={team.id} />)}
        {/* {teams.map((team) => ( */}
        {/* <Team team={team} key={team.id} /> */}
        {/* ))} */}
        <Team />
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const leagueQuery = `
  query {
    getLeague(id: ${context.params.id}) {
      leagueId
      name
      team_list {
        id
        teamname
        img
        url
        managers {
          id
          nickname
        }
        picks {
          id
          player {
            nameFirst
            nameLast
          }
        }
      }
    }
  }`;

  const res = await FetchGraphQL(leagueQuery);
  const league = res.data.getLeague;
  return { props: { league } };
};

export default league;
