import DivisionList from "../DivisionList/DivisionList"
import styles from './LeagueList.module.css'

const LeagueList = ({divisions, leagueName}) => {
  return (
    <>
      <li key={leagueName}>
        <h2>{leagueName} League</h2>
        {/* Divisions  */}
        <ul className={styles.container}>
          { Object.keys(divisions).map((divisionName, i) => (
              <li key={i}>
                <DivisionList name={divisionName} teams={divisions[divisionName]}/>
              </li>
            )
          )}
        </ul>
      </li>
    </>
  )
}

export default LeagueList;