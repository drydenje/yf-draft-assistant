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
  const { hitters, pitchers } = franchise.roster;
  const headings = [
    { Header: "nameFirst", accessor: "nameFirst" },
    { Header: "nameLast", accessor: "nameLast" },
    { Header: "nameGiven", accessor: "nameGiven" },
    { Header: "playerID", accessor: "playerID" },
    { Header: "birthYear", accessor: "birthYear" },
    { Header: "birthMonth", accessor: "birthMonth" },
    { Header: "birthDay", accessor: "birthDay" },
    { Header: "birthCountry", accessor: "birthCountry" },
    { Header: "birthState", accessor: "birthState" },
    { Header: "birthCity", accessor: "birthCity" },
    { Header: "weight", accessor: "weight" },
    { Header: "height", accessor: "height" },
    { Header: "bats", accessor: "bats" },
    { Header: "throws", accessor: "throws" },
    { Header: "debut", accessor: "debut" },
    { Header: "finalGame", accessor: "finalGame" },
    { Header: "retroID", accessor: "retroID" },
    { Header: "bbrefID", accessor: "bbrefID" },
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
        priority
        className="w-1/5 h-auto"
      />

      {hitters.length > 0 ? (
        <div>
          <h2>Hitters</h2>
          <Table headings={headings} stats={hitters} />
        </div>
      ) : null}
      {pitchers.length > 0 ? (
        <div>
          <h2>Pitchers</h2>
          <Table headings={headings} stats={pitchers} />
        </div>
      ) : null}
      
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
          roster {
            hitters {
              playerID
              birthYear
              birthMonth
              birthDay
              birthCountry
              birthState
              birthCity
              nameFirst
              nameLast
              nameGiven
              weight
              height
              bats
              throws
              debut
              finalGame
              retroID
              bbrefID
            }
            pitchers {
              playerID
              birthYear
              birthMonth
              birthDay
              birthCountry
              birthState
              birthCity
              nameFirst
              nameLast
              nameGiven
              weight
              height
              bats
              throws
              debut
              finalGame
              retroID
              bbrefID
            }
          }
        }
      }
`;

  const res = await FetchGraphQL(franchiseQuery);
  const franchise = res.data.franchise;
  return { props: { franchise } };
};

export default franchise;
