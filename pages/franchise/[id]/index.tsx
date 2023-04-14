import Image from 'next/image';
import FetchGraphQL from "@/services/Data/FetchGraphQL";
import Table from "@/components/Table";

const franchise = ({ franchise }) => {
  const svgName = franchise.franchName
    .toLowerCase()
    .replace(/ /g, '-')
    .concat('-logo.svg');
  const logoPath = "/assets/logos/" + svgName;
  const altText = "Logo of the " + franchise.franchName;

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
      <p>
        <span>{franchise.franchName}</span>
      </p>
      <Image 
        src={logoPath}
        alt={altText}
        width={0}
        height={0}
        // width={200}
        // height={161.36}
        priority
        className="w-1/5 h-auto"
      />
{/* 
      {player.basicBattingStats.length > 0 ? (
        <Table headings={batterHeadings} stats={player.basicBattingStats} />
      ) : null}
      {player.basicPitchingStats.length > 0 ? (
        <Table headings={pitcherHeadings} stats={player.basicPitchingStats} />
      ) : null}
       */}
    </div>
  );
};

export const getServerSideProps = async (context) => {
    const franchiseQuery = `
      query {
        franchise(id: "${context.params.id}") {
          franchID
          franchName
          active
          NAassoc
        }
      }
`;

  const res = await FetchGraphQL(franchiseQuery);
  const franchise = res.data.franchise;
  return { props: { franchise } };
};

export default franchise;
