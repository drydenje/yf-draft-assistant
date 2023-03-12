import styles from "./Table.module.css";
{
  /* <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm"> */
}

const Table = () => {
  return (
    <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
      <thead>
        <tr>
          <th className="border border-slate-300 underline">State</th>
          <th className="border border-slate-300">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300">Indiana</td>
          <td className="border border-slate-300">Indianapolis</td>
        </tr>
        <tr>
          <td className="border border-slate-300">Ohio</td>
          <td className="border border-slate-300">Columbus</td>
        </tr>
        <tr>
          <td className="border border-slate-300">Michigan</td>
          <td className="border border-slate-300">Detroit</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
