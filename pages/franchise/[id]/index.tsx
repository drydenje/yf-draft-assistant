import Image from 'next/image';
import FetchGraphQL from "@/services/Data/FetchGraphQL";
import Table from "@/components/Table";
import { unionWith, isEqual } from 'lodash'
import { useRouter } from 'next/router';

const franchise = ({ franchise }) => {
  const svgName = franchise.franchName
    .toLowerCase()
    .replace(/ /g, '-')
    .concat('-logo.svg');
  const logoPath = "/assets/logos/" + svgName;
  const altText = "Logo of the " + franchise.franchName;
  const { hitters, pitchers } = franchise.roster;
  const roster = unionWith(hitters, pitchers, isEqual);

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

  // const handleRowClick = (row) => {
  //   // navigate to playerID
  //   // const router = useRouter();
  //   const { playerID } = row.original;
  //   useRouter().push(`/player/${playerID}`)
  //   // router.push(`/player/${playerID}`)
  //   // console.log("ROW:", row.original.playerID)
  // }
  
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

      {roster.length > 0 ? (
        <div>
          <h2>Roster</h2>
          <Table headings={headings} stats={roster} />
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
