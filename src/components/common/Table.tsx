import { isEmpty } from "lodash";

const Table = ({
  headings,
  tableData,
  enableSerialNo,
}: {
  headings: { label: string; key: string }[];
  tableData: Record<string, string | number>[];
  enableSerialNo?: boolean;
}) => {
  return (
    <table className="w-fit text-left text-sm text-gray-700">
      <thead className="bg-gray-100 text-xs uppercase text-gray-600">
        <tr>
          {enableSerialNo && <th className="px-6 py-3 font-semibold">S.no</th>}
          <th className="px-6 py-3 font-semibold">Question</th>
          <th className="px-6 py-3 font-semibold">Answer</th>
          <th className="px-6 py-3 font-semibold">Expected Answer</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {!isEmpty(tableData) &&
          tableData.map((data, idx) => (
            <tr key={data.id} className="transition-colors hover:bg-gray-50">
              {enableSerialNo && (
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                  {idx + 1}
                </td>
              )}
              {headings.map((h) => (
                <td className="px-6 py-4">{data[h.key]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
