import FetchGraphQL from "@/services/Data/FetchGraphQL";
import StatTable from "@/components/StatTable";

const player = ({ player }) => {
  // console.log(player);
  return (
    <div>
      <span>{player.nameFirst}</span> <span>{player.nameLast}</span>
      <StatTable stats={player.basicBattingStats} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const playerQuery = `
  query {
    playerByID(id: "${context.params.id}") {
      playerID
      nameFirst
      nameLast
      height
      basicBattingStats {
        yearID
        iH
      }
      basicPitchingStats {
        yearID
        W
        L
        ERA
      }
    }
  }
  `;

  const res = await FetchGraphQL(playerQuery);
  const player = res.data.playerByID;
  return { props: { player } };
};

export default player;
