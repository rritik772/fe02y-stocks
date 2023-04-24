export interface PerformanceResponse {
  status: string;
  data: PerformanceStock[];
}

export interface PerformanceStock {
  CompanyName: string;

  MarketCap: number;

  NSECode: string;

  TodayHigh: number;

  TodayLow: number;

  ltp: number;

  dayChange: string;

  dayChangePerc: string;

  YrHigh: number;

  YrLow: number;
}
