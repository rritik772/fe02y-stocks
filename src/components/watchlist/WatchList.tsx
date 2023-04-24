import { Paper, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useListContext } from "../../context/ListContext";

const WatchList = () => {
  const { watchlist } = useListContext();

  const [watchset, setWatchset] = useState<string[]>([]);

  useEffect(() => {
    let temp = new Set(watchlist);
    setWatchset([...temp]);
  }, [watchlist])

  return (
    <>
      {watchset.map((stock, i) => (
        <Text key={i}>{stock}</Text>
      ))}
    </>
  )
}

export default WatchList;
