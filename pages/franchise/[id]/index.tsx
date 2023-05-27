import Image from 'next/image';
import FetchGraphQL from "@/services/Data/FetchGraphQL";
import Table from "@/components/Table";
import { unionWith, isEqual } from 'lodash'

import { HTMLProps, FC, ReactElement } from 'react';
import  NextLink from 'next/link';
import Link, { LinkProps } from 'next/link';


import { createColumnHelper } from '@tanstack/react-table';

const franchise = ({ franchise }) => {
  const svgName = franchise.franchName
    .toLowerCase()
    .replace(/ /g, '-')
    .concat('-logo.svg');
  const logoPath = "/assets/logos/" + svgName;
  const altText = "Logo of the " + franchise.franchName;
  const { hitters, pitchers } = franchise.roster;

  type Player = {
    name: ReactElement<LinkProps>
    // name: string
    birthday: string
    weight: number
    height: number
    bats: string
    throws: string
    bbrefID: ReactElement<LinkProps>
  };
    
  const roster: Player[] = unionWith(hitters, pitchers, isEqual)  
    .map(player => {
      // const playerLink = `${player.nameFirst} ${player.nameLast}`;
      const playerLink = <Link href={`/player/${player.playerID}`}>{`${player.nameFirst} ${player.nameLast}`}</Link>;
      const bday = new Date(player.birthYear, player.birthMonth - 1, player.birthDay);
      const firstLetter = player.bbrefID.charAt(0);
      const bbrLink = <Link href={`https://www.baseball-reference.com/players/${firstLetter}/${player.bbrefID}.shtml`}>BBRef</Link>;
      const newPlayer = {
        name: playerLink,
        birthday: bday.toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'}),
        weight: player.weight,
        height: player.height,
        bats: player.bats,
        throws: player.throws,
        bbrefID: bbrLink,
      }
      return newPlayer;
    })

    const columnHelper = createColumnHelper<Player>();

    const columns = [
      columnHelper.accessor('name', {
        cell: info => info.getValue(),
        header: () => <span>Name</span>,
      }),
      columnHelper.accessor('birthday', {
        cell: info => info.getValue(),
        header: () => <span>DoB</span>,
      }),
      columnHelper.accessor('weight', {
        cell: info => info.getValue(),
        header: () => <span>Weight</span>,
      }),
      columnHelper.accessor('height', {
        cell: info => info.getValue(),
        header: () => <span>Height</span>,
      }),
      columnHelper.accessor('bats', {
        cell: info => info.getValue(),
        header: () => <span>Bats</span>,
      }),
      columnHelper.accessor('throws', {
        cell: info => info.getValue(),
        header: () => <span>Throws</span>,
      }),
      columnHelper.accessor('bbrefID', {
        cell: info => info.getValue(),
        header: () => <span>Throws</span>,
      }),
    ]

    // console.log(columns[0]);

  return (
    <>
      {/* <div className="myWrapper"> */}
        <p>
          <span>{franchise.franchName}</span>
        </p>
        <Image 
          className="background-team-logo"
          src={logoPath}
          alt={altText}
          width={500}
          height={500}
          priority
        />

        {roster.length > 0 ? (
          <div>
            <h2>Roster</h2>
            {/* <Table  */}
            <Table columns={columns} data={roster}/>
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
