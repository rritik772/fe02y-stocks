
export interface IndexesModal {
  NSECode: string;
  TodayOpen: number;
  TodayHigh: number;
  TodayLow: number;
  TodayClose: number;
  ltp: number;
  dayChange: string;
  dayChangePerc: string;
}

export interface IndexResponse {
  status: string;
  data: IndexesModal[];
}
