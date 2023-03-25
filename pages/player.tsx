import { useMemo } from "react";
import { HeightInFeet } from "@/services/Format/Height";
import Head from "next/head";
import Table from "@/components/Table";

const Player = ({ player }) => {
  const { name } = useMemo(() => player, []);
  console.log("Height:", HeightInFeet(72));
  const headings = [
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

  const stats = [
    {
      yearID: 2017,
      iG: 98,
      iAB: 412,
      iR: 75,
      iH: 117,
      i2B: 24,
      i3B: 6,
      iHR: 11,
      iRBI: 45,
      iSB: 46,
      iCS: 8,
      iBB: 30,
      iSO: 80,
      iIBB: 0,
      iHBP: 4,
      iSH: 0,
      iSF: 1,
      iGIDP: 4,
    },
    {
      yearID: 2018,
      iG: 162,
      iAB: 664,
      iR: 103,
      iH: 180,
      i2B: 27,
      i3B: 6,
      iHR: 19,
      iRBI: 73,
      iSB: 43,
      iCS: 9,
      iBB: 69,
      iSO: 132,
      iIBB: 3,
      iHBP: 5,
      iSH: 2,
      iSF: 0,
      iGIDP: 7,
    },
    {
      yearID: 2019,
      iG: 122,
      iAB: 521,
      iR: 96,
      iH: 155,
      i2B: 37,
      i3B: 5,
      iHR: 19,
      iRBI: 57,
      iSB: 35,
      iCS: 5,
      iBB: 43,
      iSO: 113,
      iIBB: 2,
      iHBP: 3,
      iSH: 0,
      iSF: 2,
      iGIDP: 10,
    },
    {
      yearID: 2020,
      iG: 59,
      iAB: 233,
      iR: 46,
      iH: 78,
      i2B: 15,
      i3B: 4,
      iHR: 12,
      iRBI: 41,
      iSB: 12,
      iCS: 4,
      iBB: 22,
      iSO: 36,
      iIBB: 0,
      iHBP: 2,
      iSH: 0,
      iSF: 2,
      iGIDP: 5,
    },
    {
      yearID: 2021,
      iG: 96,
      iAB: 388,
      iR: 66,
      iH: 125,
      i2B: 17,
      i3B: 3,
      iHR: 18,
      iRBI: 49,
      iSB: 21,
      iCS: 3,
      iBB: 26,
      iSO: 77,
      iIBB: 0,
      iHBP: 4,
      iSH: 0,
      iSF: 2,
      iGIDP: 13,
    },
    {
      yearID: 2021,
      iG: 52,
      iAB: 207,
      iR: 41,
      iH: 70,
      i2B: 17,
      i3B: 0,
      iHR: 10,
      iRBI: 28,
      iSB: 11,
      iCS: 2,
      iBB: 15,
      iSO: 33,
      iIBB: 2,
      iHBP: 2,
      iSH: 0,
      iSF: 2,
      iGIDP: 5,
    },
  ];

  return (
    <>
      <Head>
        <title>{`${name}'s Statistics`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Players</h1>
      <h2>{name}</h2>
      <Table headings={headings} stats={stats} />
    </>
  );
};

// this is called at build-time
export async function getStaticProps() {
  // pull data from an external source
  // const res = await fetch("...");
  // const players = await res.json();

  // dummy data for development
  // const players = [
  //   {
  //     name: "Mike Trout",
  //   },
  // ];

  // const player = players[0];

  const player = {
    name: "Mike Trout",
  };

  return {
    props: {
      player,
    },
  };
}

export default Player;
