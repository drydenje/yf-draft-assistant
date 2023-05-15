import Image from 'next/image';
import FetchGraphQL from "@/services/Data/FetchGraphQL";
import Table from "@/components/Table";
import { unionWith, isEqual } from 'lodash'
import Link from 'next/link';

const franchise = ({ franchise }) => {
  const svgName = franchise.franchName
    .toLowerCase()
    .replace(/ /g, '-')
    .concat('-logo.svg');
  const logoPath = "/assets/logos/" + svgName;
  const altText = "Logo of the " + franchise.franchName;
  const { hitters, pitchers } = franchise.roster;
  const roster = unionWith(hitters, pitchers, isEqual)  
    .map(player => {
      const bday = new Date(player.birthYear, player.birthMonth - 1, player.birthDay);
      const playerLink = <Link href={`/player/${player.playerID}`}>{`${player.nameFirst} ${player.nameLast}`}</Link>;
      const firstLetter = player.bbrefID.charAt(0);
      const bbrLink = <Link href={`https://www.baseball-reference.com/players/${firstLetter}/${player.bbrefID}.shtml`}>BBRef</Link>;
      const newPlayer = {
        name: playerLink,
        birthday: bday.toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'}),
        // birthCity: player.birthCity,
        // birthState: player.birthState,
        // birthCountry: player.birthCountry,
        weight: player.weight,
        height: player.height,
        bats: player.bats,
        throws: player.throws,
        // retroID: player.retroID,
        bbrefID: bbrLink,
      }
      return newPlayer;
    })

  const headings = [
    { Header: "Name", accessor: "name" },
    { Header: "DoB", accessor: "birthday" },
    // { Header: "City", accessor: "birthCity" },
    // { Header: "State", accessor: "birthState" },
    // { Header: "Country", accessor: "birthCountry" },
    { Header: "Weight", accessor: "weight" },
    { Header: "Height", accessor: "height" },
    { Header: "Bats", accessor: "bats" },
    { Header: "Throws", accessor: "throws" },
    // { Header: "retroID", accessor: "retroID" },
    { Header: "bbrefID", accessor: "bbrefID" },
  ];

  return (
    <>
      {/* <div className="myWrapper"> */}
        <p>
          <span>{franchise.franchName}</span>
        </p>
        <Image 
          src={logoPath}
          alt={altText}
          width={100}
          height={100}
          priority
        />

        {roster.length > 0 ? (
          <div>
            <h2>Roster</h2>
            <Table headings={headings} stats={roster}/>
          </div>
        ) : null}      
      {/* </div> */}
    </>
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
              #nameGiven
              weight
              height
              bats
              throws
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
              #nameGiven
              weight
              height
              bats
              throws
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
