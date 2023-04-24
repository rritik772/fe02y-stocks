import { Button, Stack, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNseContext } from "../../context/nse";
import { IndexResponse } from "../../models/IndexesModel";
import { PerformanceResponse } from "../../models/PerformanceStock";
import NiftyIndexComponent from "./NiftyIndexComponent";
import PerformanceStocks from "./PerformanceStocks";

const NseComponent = () => {
  const [NiftyIndexData, setNiftyIndexData] = useState<
    IndexResponse | undefined
  >(undefined);
  const [TopGainersData, setTopGainersData] = useState<PerformanceResponse | undefined>();
  const [TopLosersData, setTopLosersData] = useState<PerformanceResponse | undefined>();
  const [TopVolumeData, setTopVolumeData] = useState<PerformanceResponse | undefined>();

  const {
    get_nse_index_data,
    get_stock_data,
    get_all_stocks,
    get_top_gainers,
    get_top_losers,
    get_top_volume,
  } = useNseContext();

  const index_data = async () => {
    if (get_nse_index_data === undefined) return;
    let response = await get_nse_index_data([]);
    setNiftyIndexData(response);
  };

  const performance_data = async () => {
    if (get_top_gainers !== undefined) {
      let response = await get_top_gainers();
      setTopGainersData(response);
    }

    if (get_top_losers !== undefined) {
      let response = await get_top_losers();
      setTopLosersData(response);
    }

    if (get_top_volume !== undefined) {
      let response = await get_top_volume();
      setTopVolumeData(response);
    }
  }

  useEffect(() => {
    index_data();
    performance_data();
  }, []);
  return (
    <Stack spacing='xl'>
      <div>
        <Title className="display" color="dimmed">Nifty Index Data</Title>
        {NiftyIndexData === undefined ? <Button loading>NiftyIndexData</Button> : <NiftyIndexComponent data={NiftyIndexData} />}
      </div>

      <div>
        <Title className="display" color="dimmed">Nifty Top Gainers</Title>
        {TopGainersData === undefined ? <Button loading>TopGainersData</Button> : <PerformanceStocks data={TopGainersData} />}
      </div>

      <div>
        <Title className="display" color="dimmed">Nifty Top Losers</Title>
        {TopLosersData === undefined ? <Button loading>TopLosersData</Button> : <PerformanceStocks data={TopLosersData} />}
      </div>

      <div>
        <Title className="display" color="dimmed">Nifty Top Volumers</Title>
        {TopVolumeData === undefined ? <Button loading>TopVolumeData</Button> : <PerformanceStocks data={TopVolumeData} />}
      </div>
    </Stack>
  );
};

export default NseComponent;
