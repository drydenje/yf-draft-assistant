import { Metadata } from 'next';
import Layout from '@/domain/Layout/Layout';
import LeagueList from '@/components/LeagueList';
import FetchGraphQL from '@/services/Data/FetchGraphQL';

export const metadata: Metadata = {
  title: 'Draft Assistant: MLB Franchises',
  description: 'A list of all active MLB franchises'
}

type Franchise = {
  franchID: string,
  franchName: string,
  league: "American" | "National",
  division: "East" | "Central" | "West",
}

interface FranchiseProps {
  teams: Franchise[],
}

const Franchise = ({teams} : FranchiseProps ) => {
  // console.log(teams);
  let leagues = {
      "American": {
        "East": [],
        "Central": [],
        "West": [],
      },
      "National": {
        "East": [],
        "Central": [],
        "West": [],
      }
    }

  for(const team of teams) {
    const { league, division } = team;

    leagues[league] = {
      ...leagues[league], 
      [division]: [ 
        ...leagues[league][division],
          {  
            franchID: team.franchID,
            franchName: team.franchName,
          }
        ]
      }
  }

  const listLeagues = Object.keys(leagues).map((leagueName, i) => {
    return(
      <ul key={i}>
        <LeagueList divisions={leagues[leagueName]} leagueName={leagueName}/>
      </ul>
    )
  })
  
  return (
    <Layout>
      <h1>Franchises</h1>
      { listLeagues }
    </Layout>
  )
}

export async function getStaticProps() {
  const franchiseQuery = `
    query {
      activeFranchises {
        franchID
        franchName
        league
        division
      }
    }
  `;

  const results = await FetchGraphQL(franchiseQuery);
  const r = results.data.activeFranchises;
  
  return {
    props: { teams: r }
  }
}

export default Franchise;