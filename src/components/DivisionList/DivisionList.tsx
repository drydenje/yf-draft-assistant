import Link from 'next/link';
import styles from './DivisionList.module.css';

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
    <div className={styles.divisionContainer}>
      <h2>{name}</h2>
      <ul>
        { teams.map((team) => 
          <li key={team.franchID}>
            <Link className={styles.teamLink} href={`/franchise/${team.franchID}`}>{team.franchName}</Link>
          </li> 
        )}
      </ul>
    </div>
  );
};

export default DivisionList;
