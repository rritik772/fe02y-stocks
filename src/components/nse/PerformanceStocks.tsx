import { Table } from "@mantine/core";
import { useListContext } from "../../context/ListContext";
import { PerformanceResponse } from "../../models/PerformanceStock";

const PerformanceStocks = ({ data }: { data: PerformanceResponse }) => {
  const { appendWatchlist, setStockdetails } = useListContext();

  const row = data.data.map((stock, i) => (
    <tr
      key={i}
      onClick={() => setStockdetails(stock.NSECode)}
    >
      <td>{stock.NSECode}</td>
      <td>{stock.MarketCap}</td>
      <td>{stock.TodayHigh.toFixed(2)}</td>
      <td>{stock.TodayLow.toFixed(2)}</td>
      <td>{stock.ltp.toFixed(2)}</td>
      <td>{parseFloat(stock.dayChange).toFixed(2)}</td>
      <td>{parseFloat(stock.dayChangePerc).toFixed(2)}</td>
      <td>{stock.YrHigh.toFixed(2)}</td>
      <td>{stock.YrLow.toFixed(2)}</td>
      <td onClick={() => appendWatchlist(stock.CompanyName)}>&#9873;</td>
    </tr >
  ))

  return (
    <Table withBorder striped highlightOnHover>
      <thead>
        <tr>
          {/* <th>Company Name</th> */}
          <th>NSE Code</th>
          <th>MarketCap</th>
          <th>TodayHigh</th>
          <th>TodayLow</th>
          <th>LTP</th>
          <th>Day Change</th>
          <th>Day Change%</th>
          <th>YrHigh</th>
          <th>YrLow</th>
          <th>Save</th>
        </tr>
      </thead>

      <tbody>{row}</tbody>
    </Table>
  )
}

export default PerformanceStocks;
