const StatTable = ({ stats }) => {
  // console.log(stats);
  // console.log(Object.values(stats[0]));

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
        {stats.map((statline) => {
          return (
            <tr key={statline.yearId}>
              {Object.values(statline).map((value) => {
                return <th key={value}>{value}</th>;
              })}
            </tr>
          );
        })}
        {/* <td>Indiana</td>
          <td>Indianapolis</td> */}
      </tbody>
    </table>
  );
};

export default StatTable;
