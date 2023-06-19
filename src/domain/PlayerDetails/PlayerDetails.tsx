import Table from "@/components/Table";
import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';
import styles from "./PlayerDetails.module.css";

const PlayerDetails = ({ player }) => {
  type Batter = {
    yearID: number,
    iG: number,
    iAB: number,
    iR: number,
    iH: number,
    i2B: number,
    i3B: number,
    iHR: number,
    iRBI: number,
    iSB: number,
    iCS: number,
    iBB: number,
    iSO: number,
    iIBB: number,
    iHBP: number,
    iSH: number,
    iSF: number,
    iGIDP: number,
  };

  type Pitcher = {
    yearID: number,
    teamID: string,
    lgID : string,
    W: number,
    L: number,
    G: number,
    GS: number,
    CG: number,
    SHO: number,
    SV: number,
    IPouts: number,
    H: number,
    ER: number,
    HR: number,
    BB: number,
    SO: number,
    BAOpp: number,
    ERA: number,
    IBB: number,
    WP: number,
    HBP: number,
    BK: number,
    BFP: number,
    GF: number,
    R: number,
    SH: number,
    SF: number,
  }
  
  const columnHelper = createColumnHelper<Batter>();
  const batterHeadings = [
    columnHelper.accessor('yearID', {
      cell: info => info.getValue(),
      header: () => <span>Year</span>,
    }),
    columnHelper.accessor('iG', {
      cell: info => info.getValue(),
      header: () => <span>G</span>
    }),
    columnHelper.accessor('iAB', {
      cell: info => info.getValue(),
      header: () => <span>AB</span>
    }),
    columnHelper.accessor('iR', {
      cell: info => info.getValue(),
      header: () => <span>R</span>
    }),
    columnHelper.accessor('iH', {
      cell: info => info.getValue(),
      header: () => <span>H</span>
    }),
    columnHelper.accessor('i2B', {
      cell: info => info.getValue(),
      header: () => <span>2B</span>
    }),
    columnHelper.accessor('i3B', {
      cell: info => info.getValue(),
      header: () => <span>3B</span>
    }),
    columnHelper.accessor('iHR', {
      cell: info => info.getValue(),
      header: () => <span>HR</span>
    }),
    columnHelper.accessor('iRBI', {
      cell: info => info.getValue(),
      header: () => <span>RBI</span>
    }),
    columnHelper.accessor('iSB', {
      cell: info => info.getValue(),
      header: () => <span>SB</span>
    }),
    columnHelper.accessor('iCS', {
      cell: info => info.getValue(),
      header: () => <span>CS</span>
    }),
    columnHelper.accessor('iBB', {
      cell: info => info.getValue(),
      header: () => <span>BB</span>
    }),
    columnHelper.accessor('iSO', {
      cell: info => info.getValue(),
      header: () => <span>SO</span>
    }),
    columnHelper.accessor('iIBB', {
      cell: info => info.getValue(),
      header: () => <span>IBB</span>
    }),
    columnHelper.accessor('iHBP', {
      cell: info => info.getValue(),
      header: () => <span>HBP</span>
    }),
    columnHelper.accessor('iSH', {
      cell: info => info.getValue(),
      header: () => <span>SH</span>
    }),
    columnHelper.accessor('iSF', {
      cell: info => info.getValue(),
      header: () => <span>SF</span>
    }),
    columnHelper.accessor('iGIDP', {
      cell: info => info.getValue(),
      header: () => <span>GIDP</span>
    }),
  ];

  const pitcherHelper = createColumnHelper<Pitcher>();
  const pitcherHeadings = [
    pitcherHelper.accessor('yearID', {
      cell: info => info.getValue(),
      header: () => <span>Year</span>
    }),
    pitcherHelper.accessor('teamID', {
      cell: info => info.getValue(),
      header: () => <span>Team</span>
    }),
    pitcherHelper.accessor('lgID', {
      cell: info => info.getValue(),
      header: () => <span>League</span>
    }),
    pitcherHelper.accessor('W', {
      cell: info => info.getValue(),
      header: () => <span>W</span>
    }),
    pitcherHelper.accessor('L', {
      cell: info => info.getValue(),
      header: () => <span>L</span>
    }),
    pitcherHelper.accessor('G', {
      cell: info => info.getValue(),
      header: () => <span>G</span>
    }),
    pitcherHelper.accessor('GS', {
      cell: info => info.getValue(),
      header: () => <span>GS</span>
    }),
    pitcherHelper.accessor('CG', {
      cell: info => info.getValue(),
      header: () => <span>CG</span>
    }),
    pitcherHelper.accessor('SHO', {
      cell: info => info.getValue(),
      header: () => <span>SHO</span>
    }),
    pitcherHelper.accessor('SV', {
      cell: info => info.getValue(),
      header: () => <span>SV</span>
    }),
    pitcherHelper.accessor('IPouts', {
      cell: info => info.getValue(),
      header: () => <span>IPouts</span>
    }),
    pitcherHelper.accessor('H', {
      cell: info => info.getValue(),
      header: () => <span>H</span>
    }),
    pitcherHelper.accessor('ER', {
      cell: info => info.getValue(),
      header: () => <span>ER</span>
    }),
    pitcherHelper.accessor('HR', {
      cell: info => info.getValue(),
      header: () => <span>HR</span>
    }),
    pitcherHelper.accessor('BB', {
      cell: info => info.getValue(),
      header: () => <span>BB</span>
    }),
    pitcherHelper.accessor('SO', {
      cell: info => info.getValue(),
      header: () => <span>SO</span>
    }),
    pitcherHelper.accessor('BAOpp', {
      cell: info => info.getValue(),
      header: () => <span>BAOpp</span>
    }),
    pitcherHelper.accessor('ERA', {
      cell: info => info.getValue(),
      header: () => <span>ERA</span>
    }),
    pitcherHelper.accessor('IBB', {
      cell: info => info.getValue(),
      header: () => <span>IBB</span>
    }),
    pitcherHelper.accessor('WP', {
      cell: info => info.getValue(),
      header: () => <span>WP</span>
    }),
    pitcherHelper.accessor('HBP', {
      cell: info => info.getValue(),
      header: () => <span>HBP</span>
    }),
    pitcherHelper.accessor('BK', {
      cell: info => info.getValue(),
      header: () => <span>BK</span>
    }),
    pitcherHelper.accessor('BFP', {
      cell: info => info.getValue(),
      header: () => <span>BFP</span>
    }),
    pitcherHelper.accessor('GF', {
      cell: info => info.getValue(),
      header: () => <span>GF</span>
    }),
    pitcherHelper.accessor('R', {
      cell: info => info.getValue(),
      header: () => <span>R</span>
    }),
    pitcherHelper.accessor('SH', {
      cell: info => info.getValue(),
      header: () => <span>SH</span>
    }),
    pitcherHelper.accessor('SF', {
      cell: info => info.getValue(),
      header: () => <span>SF</span>
    }),
  ];

  return (
    <div>
      <h2>
        <span>{player.nameFirst}</span> <span>{player.nameLast}</span>
      </h2>

      <p>
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
      {/*
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
          <Table columns={batterHeadings} data={player.basicBattingStats} />
        </>
      ) : null}

      {player.basicPitchingStats.length > 0 ? (
        <>
          <h3>Pitching Statistics</h3>
          <Table columns={pitcherHeadings} data={player.basicPitchingStats} />
        </>
      ) : null}
    </div>
  );
};

export default PlayerDetails;
