import FetchGraphQL from '@/services/Data/FetchGraphQL'

const Franchises = ({results}) => {
  
  let leagues = 
    {
      "American": {
          "West": [],
          "East": [],
          "Central": []
      },
      "National": {
          "West": [],
          "East": [],
          "Central": []
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

  const test = Object.values(leagues);

  console.log(test)

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
      <h1>Franchises</h1>
      <ul>
        { }


        <ul className="league">
          
        </ul>
      </ul>
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

export default Franchises;