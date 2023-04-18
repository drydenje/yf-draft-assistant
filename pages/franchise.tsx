import Link from 'next/link'
import FetchGraphQL from '@/services/Data/FetchGraphQL'

const Franchise = ({results}) => {
  
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

  for(const team of results) {
    const { league, division } = team;

    leagues[team.league] = {
      ...leagues[team.league], 
      [team.division]: [ 
        ...leagues[team.league][team.division],
          {  
            franchID: team.franchID,
            franchName: team.franchName,
          }
        ]
      }
  }

  const listLeagues = Object.keys(leagues).map((leagueName, i) => 
    <ul className="league" key={i}>
        <li key={i}>
          <h2>{leagueName}</h2>
          <ul className="division">
            { Object.keys(leagues[leagueName]).map((divisionName, i) => 
            <li key={i}>
              <h2>{divisionName}</h2>
              <ul className="team">
                { Object.values(leagues[leagueName][divisionName]).map((team, i) => 
                  <li key={i}>
                    <Link href={`/franchise/${team.franchID}`}>{team.franchName}</Link>
                  </li> 
                )}
              </ul>
            </li>)}
          </ul>
        </li>
    </ul>)
  
  // const leagues = {
    //   "American": {
      //     "East": [ "TOR", "NYY", "BAL"],
      //     "Central": ["MIN", "CLE", "CHW", "DET", "KCR"],
      //     "West": ["TEX", "ANA", "SEA", "HOU", "OAK"],
      //   },
      //   "National": {
        //     "East":["ATL", "NYM", "FLA", "PHI", "WSN"],
        //     "Central": ["MIL", "PIT", "CHC", "STL", "CIN"],
        //     "West": ["ARI", "LAD", "SDP", "SFG", "COL"],
        //   }
  // }
  // console.log(leagues);
  
  return (
    <>
      <h1 className="mainHeading">Franchises</h1>
      { listLeagues }
    </>
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
    props: { results: r }
  }
}

export default Franchise;