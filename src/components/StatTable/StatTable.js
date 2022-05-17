const StatTable = ({ stats }) => {
  console.log(stats);

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
        <tr>
          {/* {stats.} */}
          {/* <td>Indiana</td>
          <td>Indianapolis</td> */}
        </tr>
      </tbody>
    </table>
  );
};

export default StatTable;
