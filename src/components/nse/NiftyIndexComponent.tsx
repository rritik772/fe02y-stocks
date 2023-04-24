import { Table } from "@mantine/core";
import { IndexResponse } from "../../models/IndexesModel";

const NiftyIndexComponent = ({ data }: { data: IndexResponse }) => {
  const rows = data.data.map((index, i) => (
    <tr key={i}>
      <td>{index.NSECode}</td>
      <td>{index.TodayClose.toFixed(2)}</td>
      <td>{index.TodayOpen.toFixed(2)}</td>
      <td>{index.TodayHigh.toFixed(2)}</td>
      <td>{index.TodayLow.toFixed(2)}</td>
      <td>{index.ltp.toFixed(2)}</td>
      <td>{parseFloat(index.dayChange).toFixed(2)}</td>
      <td>{parseFloat(index.dayChangePerc).toFixed(2)}</td>
    </tr>
  ))

  return (
    <Table captionSide="bottom" striped highlightOnHover withBorder>
      <thead>
        <tr>
          <th>NSECode</th>
          <th>TodayClose</th>
          <th>TodayOpen</th>
          <th>TodayHigh</th>
          <th>TodayLow</th>
          <th>LTP</th>
          <th>DayChange</th>
          <th>DayChange%</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
};

export default NiftyIndexComponent;
