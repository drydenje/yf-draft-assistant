import Table from "@/components/Table";
import styles from "./PlayerDetails.module.css";

const PlayerDetails = ({ player }) => {
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
    { Header: "yearID", accessor: "yearID" },
    { Header: "stint", accessor: "stint" },
    { Header: "teamID", accessor: "teamID" },
    { Header: "lgID ", accessor: "lgID " },
    { Header: "W", accessor: "W" },
    { Header: "L", accessor: "L" },
    { Header: "G", accessor: "G" },
    { Header: "GS", accessor: "GS" },
    { Header: "CG", accessor: "CG" },
    { Header: "SHO", accessor: "SHO" },
    { Header: "SV", accessor: "SV" },
    { Header: "IPouts", accessor: "IPouts" },
    { Header: "H", accessor: "H" },
    { Header: "ER", accessor: "ER" },
    { Header: "HR", accessor: "HR" },
    { Header: "BB", accessor: "BB" },
    { Header: "SO", accessor: "SO" },
    { Header: "BAOpp", accessor: "BAOpp" },
    { Header: "ERA", accessor: "ERA" },
    { Header: "IBB", accessor: "IBB" },
    { Header: "WP", accessor: "WP" },
    { Header: "HBP", accessor: "HBP" },
    { Header: "BK", accessor: "BK" },
    { Header: "BFP", accessor: "BFP" },
    { Header: "GF", accessor: "GF" },
    { Header: "R", accessor: "R" },
    { Header: "SH", accessor: "SH" },
    { Header: "SF", accessor: "SF" },
  ];

  return (
    <div>
      <h2>
        <span>{player.nameFirst}</span> <span>{player.nameLast}</span>
      </h2>

      {/* <p>
        <span>
          Birthday: {player.birthYear}-{player.birthMonth}-{player.birthDay}
        </span>
      </p>
      <p>
        <span>
          Place of birth: {player.birthCity},{player.birthState},{" "}
          {player.birthCountry}
        </span>
      </p>
      <p>
        <span>deathYear {player.deathYear}</span>
      </p>
      <p>
        <span>deathMonth {player.deathMonth}</span>
      </p>
      <p>
        <span>deathDay {player.deathDay}</span>
      </p>
      <p>
        <span>deathCountry {player.deathCountry}</span>
      </p>
      <p>
        <span>deathState {player.deathState}</span>
      </p>
      <p>
        <span>deathCity {player.deathCity}</span>
      </p>
      <p>
        <span>nameFirst {player.nameFirst}</span>
      </p>
      <p>
        <span>nameLast {player.nameLast}</span>
      </p>
      <p>
        <span>nameGiven {player.nameGiven}</span>
      </p>
      <p>
        <span>weight {player.weight}</span>
      </p>
      <p>
        <span>height {player.height}</span>
      </p>
      <p>
        <span>bats {player.bats}</span>
      </p>
      <p>
        <span>throws {player.throws}</span>
      </p>
      <p>
        <span>debut {player.debut}</span>
      </p>
      <p>
        <span>finalGame {player.finalGame}</span>
      </p>
      <p>
        <span>retroID {player.retroID}</span>
      </p>
      <p>
        <span>bbrefID {player.bbrefID}</span>
      </p> */}
      {player.basicBattingStats.length > 0 ? (
        <>
          <h3>Hitting Statistics</h3>
          <Table headings={batterHeadings} stats={player.basicBattingStats} />
        </>
      ) : null}

      {player.basicPitchingStats.length > 0 ? (
        <>
          <h3>Pitching Statistics</h3>
          <Table headings={pitcherHeadings} stats={player.basicPitchingStats} />
        </>
      ) : null}
    </div>
  );
};

export default PlayerDetails;
