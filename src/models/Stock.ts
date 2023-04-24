export interface Stock {
  status: string;
  data: Map<string, StockData>;
}

export interface StockData {
  NSECode: string;
  TodayOpen: number;
  TodayHigh: number;
  TodayLow: number;
  TodayClose: number;
  ltp: number;
  dayChange: string;
  dayChangePerc: string;
  volume: number;
  totalBuyQty: number;
  totalSellQty: number;
}
