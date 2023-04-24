import { AllStockResponse } from "./AllStockModel";
import { IndexResponse } from "./IndexesModel";
import { PerformanceResponse } from "./PerformanceStock";
import { Stock } from "./Stock";

export interface nseContextModel {
  get_nse_index_data: undefined | ((indexes: string[]) => IndexResponse);
  get_stock_data: undefined | ((stocks: string[]) => Stock);
  get_all_stocks: undefined | (() => AllStockResponse);
  get_top_gainers: undefined | (() => PerformanceResponse);
  get_top_losers: undefined | (() => PerformanceResponse);
  get_top_volume: undefined | (() => PerformanceResponse);
}

export const nseContextModelDefault = {
  get_nse_index_data: undefined,
  get_stock_data: undefined,
  get_all_stocks: undefined,
  get_top_gainers: undefined,
  get_top_losers: undefined,
  get_top_volume: undefined,
};
