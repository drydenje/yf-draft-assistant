import Link from 'next/link';

type Division = {
  name: string,
  teams: {
    "franchID": string,
    "franchName": string,
    "league": string,
    "division": string,
  }[],
}

const DivisionList = ({ name, teams }: Division) => {
  if (teams.length === 0 || name === null) return null;

  return (
    <>
      <h2>{name}</h2>
      <ul>
        { teams.map((team) => 
          <li key={team.franchID}>
            <Link href={`/franchise/${team.franchID}`}>{team.franchName}</Link>
          </li> 
        )}
      </ul>
    </>
  );
};

export default DivisionList;
