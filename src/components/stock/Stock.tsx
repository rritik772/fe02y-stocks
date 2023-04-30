import { Table, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { useListContext } from "../../context/ListContext";
import { useNseContext } from "../../context/nse";
import { StockData } from "../../models/Stock";

const StockComponent = () => {
  const { stockdetails } = useListContext();
  const { get_stock_data } = useNseContext();

  const [stock, setStock] = useState<StockData | undefined>(undefined);

  useEffect(() => {

    const stock_data = async () => {
      // Notification
      notifications.show({
        id: `${stockdetails}`,
        title: "Fetching data",
        loading: true,
        message: `${stockdetails}`
      });
      //

      if (get_stock_data === undefined) return;

      let response = await get_stock_data([stockdetails as string]);
      let stockdetails_map = new Map(Object.entries(response.data));

      setStock(stockdetails_map.get(stockdetails as string) as StockData)

      // Notification
      notifications.update({
          id: `${stockdetails}`,
          title: "Fetching data",
          message: `${stockdetails} data fetched!`,
          loading: false
        })
      //
    }

    if (stockdetails !== undefined)
      stock_data();
  }, [stockdetails])

  return (
    <div>{stock !== undefined && (
      <>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NSECode</td>
              <td>{stock.NSECode}</td>
            </tr>
            <tr>
              <td>LastClose</td>
              <td>{stock.TodayClose.toFixed(2)}</td>
            </tr>
            <tr>
              <td>TodayOpen</td>
              <td>{stock.TodayOpen.toFixed(2)}</td>
            </tr>
            <tr>
              <td>TodayHigh</td>
              <td>{stock.TodayHigh.toFixed(2)}</td>
            </tr>
            <tr>
              <td>TodayLow</td>
              <td>{stock.TodayLow.toFixed(2)}</td>
            </tr>
            <tr>
              <td>LTP</td>
              <td>{stock.ltp.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Volume:     </td>
              <td>{stock.volume}</td>
            </tr>
            <tr>
              <td>TotBuyQty:  </td>
              <td>{stock.totalBuyQty}</td>
            </tr>
            <tr>
              <td>TotSellQty:  </td>
              <td>{stock.totalSellQty}</td>
            </tr>
          </tbody>
        </Table>
      </>
    )}</div>
  )
}

export default StockComponent;
