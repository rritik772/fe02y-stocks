import { invoke } from "@tauri-apps/api/tauri";
import { createContext, useContext, useEffect } from "react";
import {
  nseContextModel,
  nseContextModelDefault,
} from "../models/nseContextModel";

export const nseContext = createContext<nseContextModel>(
  nseContextModelDefault
);

export const useNseContext = () => useContext(nseContext);

export const NseContextProvider = ({ children }: { children: JSX.Element }) => {
  const apiKey = import.meta.env.VITE_apiKey;

  const get_nse_index_data = async (indexes: string[]) => {
    let response = await invoke("get_index_data", {
      apiKey,
      indexes,
    });
    return response;
  };

  const get_stock_data = async (stocks: string[]) => {
    let response = await invoke("get_stock_data", {
      apiKey,
      stocks,
    });

    return response;
  };

  const get_all_stocks = async () => {
    let response = await invoke("get_all_stocks", {
      apiKey,
    });

    return response;
  };

  const get_top_gainers = async () => {
    let response = await invoke("get_top_gainers", {
      apiKey,
    });

    return response;
  };

  const get_top_losers = async () => {
    let response = await invoke("get_top_losers", {
      apiKey,
    });

    return response;
  };

  const get_top_volume = async () => {
    let response = await invoke("get_top_volumes", {
      apiKey,
    });

    return response;
  };

  const value = {
    get_nse_index_data,
    get_stock_data,
    get_all_stocks,
    get_top_gainers,
    get_top_losers,
    get_top_volume,
  };

  return <nseContext.Provider value={value}>{children}</nseContext.Provider>;
};
