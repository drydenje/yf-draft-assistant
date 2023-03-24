import FetchGraphQL from "@/services/Data/FetchGraphQL";
import Table from "@/components/Table";

const player = ({ player }) => {
  const batterHeadings = [
    { Header: "Year", accessor: "yearID" },
    { Header: "G", accessor: "iG" },
    { Header: "AB", accessor: "iAB" },
    { Header: "R", accessor: "iR" },
    { Header: "H", accessor: "iH" },
    { Header: "2B", accessor: "i2B" },
    { Header: "3B", accessor: "i3B" },
    { Header: "HR", accessor: "iHR" },
    { Header: "RBI", accessor: "iRBI" },
    { Header: "SB", accessor: "iSB" },
    { Header: "CS", accessor: "iCS" },
    { Header: "BB", accessor: "iBB" },
    { Header: "SO", accessor: "iSO" },
    { Header: "IBB", accessor: "iIBB" },
    { Header: "HBP", accessor: "iHBP" },
    { Header: "SH", accessor: "iSH" },
    { Header: "SF", accessor: "iSF" },
    { Header: "GIDP", accessor: "iGIDP" },
  ];
  const pitcherHeadings = [
    { Header: "Year", accessor: "yearID" },
    { Header: "W", accessor: "W" },
    { Header: "L", accessor: "L" },
    { Header: "ERA", accessor: "ERA" },     
  ]

  return (
    <div>
      <span>{player.nameFirst}</span> <span>{player.nameLast}</span>
      { player.basicBattingStats.length > 0 ? <Table headings={batterHeadings} stats={player.basicBattingStats}/> : null }
      { player.basicPitchingStats.length > 0 ? <Table headings={pitcherHeadings} stats={player.basicPitchingStats}/> : null }
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
