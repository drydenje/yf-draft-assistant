import PlayerDetails from "@/domain/PlayerDetails";
import FetchGraphQL from "@/services/Data/FetchGraphQL";

const player = ({ player }) => {
  return (
    <PlayerDetails player={player}/>
  )  
};

export const getServerSideProps = async (context) => {
  const playerQuery = `
query {
  playerByID(id: "${context.params.id}") {
    playerID
    nameFirst
    nameLast    
  
    basicBattingStats {
      yearID
      iG
      iAB
      iR
      iH
      i2B
      i3B
      iHR
      iRBI
      iSB
      iCS
      iBB
      iSO
      iIBB
      iHBP
      iSH
      iSF
      iGIDP
    }

    basicPitchingStats {
      yearID
      stint
      teamID
      lgID 
      W
      L
      G
      GS
      CG
      SHO
      SV
      IPouts
      H
      ER
      HR
      BB
      SO
      BAOpp
      ERA
      IBB
      WP
      HBP
      BK
      BFP
      GF
      R
      SH
      SF
    }
  }
}
`;

  const res = await FetchGraphQL(playerQuery);
  const player = res.data.playerByID;
  return { props: { player } };
};

export default player;
