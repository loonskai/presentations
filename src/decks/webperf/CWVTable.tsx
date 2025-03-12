export const CWVTable = ({ noHeader = false }: { noHeader?: boolean }) => {
  return (
    <table className="tw:table-auto tw:w-full">
      {!noHeader && (
        <thead>
          <tr>
            <th className="tw:border-b">
              <h3>Loading Speed</h3>
            </th>
            <th className="tw:border-b">
              <h3>Interactivity</h3>
            </th>
            <th className="tw:border-b">
              <h3>Stability</h3>
            </th>
          </tr>
        </thead>
      )}
      <tbody>
        <tr>
          <td className="tw:p-4">
            <h2 className="tw:font-extrabold">INP</h2>
          </td>
          <td className="tw:p-4">
            <h2>TTFB</h2>
          </td>
          <td className="tw:p-4 tw:font-extrabold">
            <h2>CLS</h2>
          </td>
        </tr>
        <tr>
          <td className="tw:p-4">
            <h2>FCP</h2>
          </td>
          <td className="tw:p-4">
            <h2>TBT</h2>
          </td>
          <td className="tw:p-4"></td>
        </tr>
        <tr>
          <td className="tw:p-4">
            <h2 className="tw:font-extrabold">LCP</h2>
          </td>
          <td className="tw:p-4"></td>
          <td className="tw:p-4"></td>
        </tr>
      </tbody>
    </table>
  );
};
