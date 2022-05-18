const StatTable = ({ stats }) => {
  if (stats.length === 0) return null;

  return (
    <table className="table-auto border-collapse border border-slate-400 rounded-lg">
      <thead>
        <tr>
          {Object.keys(stats[0]).map((key) => {
            return (
              <th key={key} className="border">
                {key}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {stats.map((statline, lineIndex) => {
          return (
            <tr
              key={`${statline.yearId} + ${lineIndex}`}
              className="border border-slate-300 hover:bg-slate-100"
            >
              {Object.values(statline).map((value, index) => {
                return (
                  <th
                    key={`${lineIndex}${index}${value}`}
                    className="border border-slate-300"
                  >
                    {value}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatTable;
