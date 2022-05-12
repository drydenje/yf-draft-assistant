import { useRouter } from "next/router";
import FetchGraphQL from "@/services/Data/FetchGraphQL";

const league = ({ league }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(league);
  return <div>This is league: {id}</div>;
};

export const getServerSideProps = async (context) => {
  const leagueQuery = `
  query {
    getLeague(id: "2602757") {
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
      }
    }
  }`;

  const res = await FetchGraphQL(leagueQuery);
  const league = res.data.getLeague;
  return { props: { league } };
};

export default league;
