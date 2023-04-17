import FetchGraphQL from '@/services/Data/FetchGraphQL'

const Franchises = ({results}) => {
  // console.log(results);
  // const leagues = results.map(team=>{

  //   return team.franchID + team.league + team.division;
  // })
  
  let leagues = {}
  for(const team of results) {
    // console.log(team.franchName)
    // const temp = {
      // console.log(`${team.league}+${team.division}`);
      const temp = {
            franchID: team.franchID,
            franchName: team.franchName,
          }
      leagues[team.league] = {...leagues, [team.division]: temp }

      // leagues = {...leagues, [team.division]:  {
      //   [team.division]: temp
      // }}
    // }
    // Object.assign(leagues, temp)
  }


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
  console.log(leagues);
  
  return (
    <div>Franchises</div>
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