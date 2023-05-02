import DivisionList from '@/components/DivisionList/DivisionList';
import FetchGraphQL from '@/services/Data/FetchGraphQL'

const Franchise = ({results}) => {
  console.log(results);

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
    <ul key={i}>
        {/* Leagues */}
        <li key={i}>
          <h2>{leagueName}</h2>
          {/* Divisions  */}
          <ul>
            { Object.keys(leagues[leagueName]).map((divisionName, i) =>
                <li key={i}>
                  <DivisionList name={divisionName} teams={leagues[leagueName][divisionName]}/>
                </li>
              )
            }
          </ul>
        </li>
    </ul>)
  
  return (
    <>
      <h1>Franchises</h1>
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