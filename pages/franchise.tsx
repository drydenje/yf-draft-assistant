import Link from 'next/link'
import FetchGraphQL from '@/services/Data/FetchGraphQL'

const Franchise = ({results}) => {
  interface Team {
    franchID: String,
    franchName: String,
  }

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

  const listLeagues = Object.keys(leagues).map((leagueName, i) => 
    <ul className="bg-white border-black border-2" key={i}>
        {/* Leagues */}
        <li key={i}>
          <h2>{leagueName}</h2>
          {/* Divisions  */}
          <ul className="bg-slate-100 rounded-xl shadow-lg p-2 w-auto">
            { Object.keys(leagues[leagueName]).map((divisionName, i) => 
            <li key={i} className="rounded-xl">
              <h2>{divisionName}</h2>
              <ul className="bg-slate-300 rounded-xl shadow-lg p-2">
                { Object.values(leagues[leagueName][divisionName]).map((team: Team, i) => 
                  <li key={i}>
                    <Link href={`/franchise/${team.franchID}`}>{team.franchName}</Link>
                  </li> 
                )}
              </ul>
            </li>)}
          </ul>
        </li>
    </ul>)
  
  return (
    <>
      <h1 className="text-5xl">Franchises</h1>
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