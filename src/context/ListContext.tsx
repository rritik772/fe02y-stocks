import { createContext, useContext, useState } from "react";
import { ListContextModel, ListContextModelDefault } from "../models/ListContextModel";
import { Stock } from "../models/Stock";

const ListContext = createContext<ListContextModel>(ListContextModelDefault);
export const useListContext = () => useContext(ListContext);

export const ListContextProvider = ({ children }: { children: JSX.Element }) => {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [stockdetails, setStockdetails] = useState<string | undefined>(undefined)

  const appendWatchlist = (stock: string) => {
    setWatchlist([...watchlist, stock]);
  }

  const value = {
    watchlist,
    appendWatchlist,
    stockdetails,
    setStockdetails
  }

  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  )
}
