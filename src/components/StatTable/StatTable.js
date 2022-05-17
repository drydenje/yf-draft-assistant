const StatTable = ({ stats, playerID }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(stats[0]).map((key) => {
            return <th key={key}>{key}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {stats.map((statline, lineIndex) => {
          return (
            <tr key={`${statline.yearId} + ${lineIndex}`}>
              {Object.values(statline).map((value, index) => {
                return <th key={`${lineIndex}${index}${value}`}>{value}</th>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatTable;
