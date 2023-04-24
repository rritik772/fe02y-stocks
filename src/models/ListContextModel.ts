import { Dispatch, SetStateAction } from "react";
import { Stock } from "./Stock";

export interface ListContextModel {
  watchlist: string[],
  appendWatchlist: (stock: string) => void,
  stockdetails: string | undefined,
  setStockdetails: (stock: string) => void
}

export const ListContextModelDefault: ListContextModel = {
  watchlist: [],
  appendWatchlist: (stock: string) => {},
  stockdetails: undefined,
  setStockdetails: (stock: string) => {}
};
